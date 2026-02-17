"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/data/initialProducts";

// Type definition for transaction
type Transaction = {
    id: number;
    type: 'income' | 'expense';
    amount: number;
    desc: string;
    date: string;
};

export default function AdminPage() {
    const router = useRouter();
    const { products, isLoaded, updateProduct, resetProducts } = useProducts();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Transaction State
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [showTransModal, setShowTransModal] = useState(false);
    const [transType, setTransType] = useState<'income' | 'expense'>('income');
    const [transAmount, setTransAmount] = useState("");
    const [transDesc, setTransDesc] = useState("");

    // Product Edit State
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    // Check auth on load
    useEffect(() => {
        const auth = sessionStorage.getItem("admin_auth");
        if (auth !== "true") {
            router.push("/");
        } else {
            setIsAuthenticated(true);
            const storedTrans = localStorage.getItem('andaman_accounts');
            if (storedTrans) {
                setTransactions(JSON.parse(storedTrans));
            }
        }
    }, [router]);

    if (!isAuthenticated || !isLoaded) return null;

    // Calculate totals
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpense;

    // Transaction Handlers
    const handleSaveTrans = () => {
        if (!transAmount || Number(transAmount) <= 0) {
            alert("กรุณาระบุจำนวนเงิน");
            return;
        }

        const newTransaction: Transaction = {
            id: Date.now(),
            type: transType,
            amount: Number(transAmount),
            desc: transDesc || (transType === 'income' ? 'รายรับทั่วไป' : 'รายจ่ายทั่วไป'),
            date: new Date().toLocaleString('th-TH')
        };

        const updated = [newTransaction, ...transactions];
        setTransactions(updated);
        localStorage.setItem('andaman_accounts', JSON.stringify(updated));
        setShowTransModal(false);
        setTransAmount("");
        setTransDesc("");
    };

    const handleDeleteTrans = (id: number) => {
        if (confirm("ต้องการลบรายการนี้ใช่ไหม?")) {
            const updated = transactions.filter(t => t.id !== id);
            setTransactions(updated);
            localStorage.setItem('andaman_accounts', JSON.stringify(updated));
        }
    };

    const handleClearTrans = () => {
        if (confirm("ต้องการล้างข้อมูลบัญชีทั้งหมดใช่ไหม?")) {
            setTransactions([]);
            localStorage.removeItem('andaman_accounts');
        }
    };

    // Product Handlers
    const handleSaveProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            updateProduct(editingProduct);
            setEditingProduct(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-prompt pb-24">
            {/* Header */}
            <div className="bg-gradient-to-r from-midnight-blue to-blue-900 text-white p-8 rounded-b-[3rem] shadow-xl sticky top-0 z-20">
                <div className="max-w-4xl mx-auto flex justify-between items-start mb-6">
                    <Link href="/" className="text-white/70 hover:text-white text-sm flex items-center transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20">
                        <i className="fas fa-arrow-left mr-2"></i> กลับหน้าร้าน
                    </Link>
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-wider opacity-80 uppercase">System Online</span>
                        </div>
                        <p className="text-sm font-bold bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                            Admin: <span className="text-gold">Akkaraphon888</span>
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto text-center transform hover:scale-105 transition-transform duration-300 cursor-default">
                    <p className="text-lg opacity-70 mb-2 font-light">เงินสดในลิ้นชัก (Cash Balance)</p>
                    <h1 className={`text-7xl font-bold mb-6 tracking-tight drop-shadow-lg ${balance < 0 ? 'text-red-300' : 'text-white'}`}>
                        ฿{balance.toLocaleString()}
                    </h1>
                    <div className="flex justify-center gap-4 text-lg bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 inline-flex shadow-inner">
                        <div className="text-green-300 flex items-center px-4 border-r border-white/10">
                            <i className="fas fa-arrow-up mr-2 text-xl"></i>
                            <div>
                                <div className="text-xs opacity-70 uppercase">Total Income</div>
                                <div className="font-bold">{totalIncome.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="text-red-300 flex items-center px-4">
                            <i className="fas fa-arrow-down mr-2 text-xl"></i>
                            <div>
                                <div className="text-xs opacity-70 uppercase">Total Expense</div>
                                <div className="font-bold">{totalExpense.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-30">

                {/* Quick Actions Card */}
                <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                        <i className="fas fa-bolt text-gold mr-3 bg-midnight-blue w-8 h-8 flex items-center justify-center rounded-lg text-sm"></i>
                        จัดการบัญชีด่วน
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => { setTransType('income'); setShowTransModal(true); }}
                            className="group bg-green-50 hover:bg-green-500 active:scale-95 text-green-700 hover:text-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-green-100 hover:border-green-500 flex flex-col items-center justify-center gap-3"
                        >
                            <div className="bg-white group-hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-colors">
                                <i className="fas fa-hand-holding-dollar text-2xl"></i>
                            </div>
                            <span className="text-xl font-bold">จดรายรับ</span>
                        </button>

                        <button
                            onClick={() => { setTransType('expense'); setShowTransModal(true); }}
                            className="group bg-red-50 hover:bg-red-500 active:scale-95 text-red-700 hover:text-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-red-100 hover:border-red-500 flex flex-col items-center justify-center gap-3"
                        >
                            <div className="bg-white group-hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-colors">
                                <i className="fas fa-shopping-basket text-2xl"></i>
                            </div>
                            <span className="text-xl font-bold">จดรายจ่าย</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Recent Transactions List */}
                    <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl p-6 h-fit border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-700 flex items-center">
                                <i className="fas fa-history text-gray-400 mr-2"></i> รายการล่าสุด
                            </h2>
                            <button onClick={handleClearTrans} className="text-xs text-red-400 hover:text-red-600 underline hover:no-underline px-2 py-1 rounded hover:bg-red-50 transition-colors">
                                ล้างประวัติ
                            </button>
                        </div>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {transactions.length === 0 ? (
                                <div className="text-center text-gray-400 py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                    <i className="fas fa-receipt text-4xl mb-3 opacity-20"></i>
                                    <p>ยังไม่มีรายการวันนี้</p>
                                </div>
                            ) : (
                                transactions.map((t) => (
                                    <div key={t.id} className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex justify-between items-center relative overflow-hidden">
                                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${t.type === 'income' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                                        <div className="pl-3">
                                            <div className="font-bold text-gray-800 text-sm line-clamp-1">{t.desc}</div>
                                            <div className="text-gray-400 text-[10px] mt-0.5"><i className="far fa-clock mr-1"></i>{t.date.split(' ')[1]}</div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`block font-bold text-lg ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                                {t.type === 'income' ? '+' : '-'} {t.amount.toLocaleString()}
                                            </span>
                                            <button
                                                onClick={() => handleDeleteTrans(t.id)}
                                                className="text-xs text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity absolute top-1 right-1"
                                            >
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Product Management */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-700 flex items-center">
                                <i className="fas fa-tshirt text-midnight-blue mr-3 bg-silver/20 w-8 h-8 flex items-center justify-center rounded-lg text-sm"></i>
                                จัดการสินค้า (Product Manager)
                            </h2>
                            <button onClick={resetProducts} className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition-colors">
                                <i className="fas fa-redo-alt mr-1"></i> รีเซ็ตข้อมูล
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-midnight-blue/20 hover:shadow-lg transition-all duration-300 bg-white group">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 relative shadow-inner shrink-0">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        {product.status === 'rented' && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-[1px]">
                                                Rented
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-gray-800 text-sm truncate pr-2" title={product.name}>{product.name}</h3>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide shrink-0 ${product.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                {product.status}
                                            </span>
                                        </div>
                                        <p className="text-midnight-blue font-bold text-lg mb-2">฿{product.price.toLocaleString()}</p>
                                        <button
                                            onClick={() => setEditingProduct(product)}
                                            className="w-full text-xs font-bold py-2 rounded-lg bg-gray-50 hover:bg-midnight-blue hover:text-white transition-colors border border-gray-200 hover:border-midnight-blue flex items-center justify-center gap-2"
                                        >
                                            <i className="fas fa-pen"></i> แก้ไขราคา/สถานะ
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Transaction Modal */}
            {showTransModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all">
                    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 transform scale-100">
                        <div className={`p-8 text-white text-center text-2xl font-bold relative ${transType === 'income' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-red-400 to-red-600'}`}>
                            <button onClick={() => setShowTransModal(false)} className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity">
                                <i className="fas fa-times text-xl"></i>
                            </button>
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-inner">
                                <i className={`fas ${transType === 'income' ? 'fa-arrow-down' : 'fa-arrow-up'} text-3xl`}></i>
                            </div>
                            {transType === 'income' ? 'บันทึกรายรับ' : 'บันทึกรายจ่าย'}
                        </div>

                        <div className="p-8 space-y-6 bg-white">
                            <div>
                                <label className="block text-gray-500 text-sm mb-2 font-bold uppercase tracking-wide">จำนวนเงิน (บาท)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl font-bold">฿</span>
                                    <input
                                        type="number"
                                        autoFocus
                                        value={transAmount}
                                        onChange={(e) => setTransAmount(e.target.value)}
                                        className="w-full text-4xl p-4 pl-10 border-2 border-gray-100 rounded-2xl focus:border-midnight-blue outline-none font-bold text-midnight-blue bg-gray-50 focus:bg-white transition-all"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-500 text-sm mb-2 font-bold uppercase tracking-wide">รายละเอียด</label>
                                <input
                                    type="text"
                                    value={transDesc}
                                    onChange={(e) => setTransDesc(e.target.value)}
                                    className="w-full text-lg p-4 border-2 border-gray-100 rounded-2xl focus:border-midnight-blue outline-none bg-gray-50 focus:bg-white transition-all"
                                    placeholder={transType === 'income' ? 'เช่น ค่าเช่าชุดคุณลูกค้า' : 'เช่น ซื้อของเข้าร้าน'}
                                />
                            </div>

                            <div className="pt-2">
                                <button onClick={handleSaveTrans} className="w-full bg-midnight-blue text-white text-xl font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-900 active:scale-95 transition-all duration-200">
                                    บันทึกข้อมูลทันที
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Edit Modal */}
            {editingProduct && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all">
                    <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="bg-midnight-blue p-6 text-white relative">
                            <button onClick={() => setEditingProduct(null)} className="absolute top-4 right-4 opacity-50 hover:opacity-100">
                                <i className="fas fa-times text-xl"></i>
                            </button>
                            <h3 className="text-xl font-bold font-playfair pr-8 line-clamp-1">{editingProduct.name}</h3>
                            <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">Edit Product Details</p>
                        </div>

                        <form onSubmit={handleSaveProduct} className="p-8 space-y-6">
                            {/* Image Preview */}
                            <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
                                <img src={editingProduct.image} alt="" className="w-full h-full object-cover" />
                            </div>

                            {/* Price Input */}
                            <div>
                                <label className="block text-gray-500 text-xs font-bold uppercase mb-2">ราคาเช่า (บาท)</label>
                                <input
                                    type="number"
                                    value={editingProduct.price}
                                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                                    className="w-full p-3 border-2 border-gray-200 rounded-xl font-bold text-center text-xl text-midnight-blue focus:border-gold outline-none"
                                />
                            </div>

                            {/* Status Toggle */}
                            <div>
                                <label className="block text-gray-500 text-xs font-bold uppercase mb-3 text-center">สถานะสินค้า</label>
                                <div className="flex bg-gray-100 p-1 rounded-xl">
                                    <button
                                        type="button"
                                        onClick={() => setEditingProduct({ ...editingProduct, status: 'available' })}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${editingProduct.status === 'available' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        <i className="fas fa-check-circle mr-1"></i> ว่าง
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEditingProduct({ ...editingProduct, status: 'rented' })}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${editingProduct.status === 'rented' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        <i className="fas fa-ban mr-1"></i> ไม่ว่าง
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gold text-midnight-blue py-3 rounded-xl font-bold text-lg hover:bg-yellow-400 active:scale-95 transition-all shadow-md">
                                บันทึกการแก้ไข
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}
