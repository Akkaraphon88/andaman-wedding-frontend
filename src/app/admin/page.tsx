"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'income' | 'expense'>('income');
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");

    // Check auth on load
    useEffect(() => {
        const auth = sessionStorage.getItem("admin_auth");
        if (auth !== "true") {
            router.push("/");
        } else {
            setIsAuthenticated(true);
            // Load data
            const stored = localStorage.getItem('andaman_accounts');
            if (stored) {
                setTransactions(JSON.parse(stored));
            }
        }
    }, [router]);

    if (!isAuthenticated) return null;

    // Calculate totals
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpense;

    const handleSave = () => {
        if (!amount || Number(amount) <= 0) {
            alert("กรุณาระบุจำนวนเงิน");
            return;
        }

        const newTransaction: Transaction = {
            id: Date.now(),
            type: modalType,
            amount: Number(amount),
            desc: desc || (modalType === 'income' ? 'รายรับทั่วไป' : 'รายจ่ายทั่วไป'),
            date: new Date().toLocaleString('th-TH')
        };

        const updated = [newTransaction, ...transactions];
        setTransactions(updated);
        localStorage.setItem('andaman_accounts', JSON.stringify(updated));
        setShowModal(false);
        setAmount("");
        setDesc("");
    };

    const handleDelete = (id: number) => {
        if (confirm("ต้องการลบรายการนี้ใช่ไหม?")) {
            const updated = transactions.filter(t => t.id !== id);
            setTransactions(updated);
            localStorage.setItem('andaman_accounts', JSON.stringify(updated));
        }
    };

    const handleClear = () => {
        if (confirm("ต้องการล้างข้อมูลทั้งหมดใช่ไหม?")) {
            setTransactions([]);
            localStorage.removeItem('andaman_accounts');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-prompt pb-20">
            {/* Header */}
            <div className="bg-midnight-blue text-white p-6 rounded-b-3xl shadow-lg sticky top-0 z-10">
                <div className="max-w-2xl mx-auto flex justify-between items-start">
                    <Link href="/" className="text-white/50 hover:text-white text-sm">
                        <i className="fas fa-arrow-left mr-1"></i> กลับหน้าร้าน
                    </Link>
                    <div className="text-right">
                        <span className="bg-green-500 text-xs px-2 py-1 rounded-full">Online</span>
                        <p className="text-xs mt-1 opacity-70">Admin: KhomTech</p>
                    </div>
                </div>

                <div className="max-w-md mx-auto text-center mt-4">
                    <p className="text-xl opacity-80 mb-2">เงินสดในลิ้นชัก (คงเหลือ)</p>
                    <h1 className={`text-6xl font-bold mb-4 ${balance < 0 ? 'text-red-300' : 'text-white'}`}>
                        {balance.toLocaleString()}
                    </h1>
                    <div className="flex justify-center gap-8 text-lg">
                        <div className="text-green-300">
                            <i className="fas fa-arrow-up mr-2"></i>
                            รับ: {totalIncome.toLocaleString()}
                        </div>
                        <div className="text-red-300">
                            <i className="fas fa-arrow-down mr-2"></i>
                            จ่าย: {totalExpense.toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="max-w-md mx-auto p-4">
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <button
                        onClick={() => { setModalType('income'); setShowModal(true); }}
                        className="bg-green-500 hover:bg-green-600 active:scale-95 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 transition-all duration-200"
                    >
                        <i className="fas fa-hand-holding-dollar text-4xl"></i>
                        <span className="text-2xl font-bold">จดรายรับ</span>
                    </button>

                    <button
                        onClick={() => { setModalType('expense'); setShowModal(true); }}
                        className="bg-red-500 hover:bg-red-600 active:scale-95 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 transition-all duration-200"
                    >
                        <i className="fas fa-shopping-basket text-4xl"></i>
                        <span className="text-2xl font-bold">จดรายจ่าย</span>
                    </button>
                </div>

                {/* List */}
                <div className="mt-10">
                    <div className="flex justify-between items-center mb-4 border-l-4 border-midnight-blue pl-3">
                        <h2 className="text-2xl font-bold text-gray-700">รายการล่าสุด</h2>
                        <button onClick={handleClear} className="text-xs text-red-400 hover:text-red-600 underline">
                            ล้างทั้งหมด
                        </button>
                    </div>

                    <div className="space-y-3">
                        {transactions.length === 0 ? (
                            <div className="text-center text-gray-400 py-10">
                                <i className="fas fa-clipboard-list text-4xl mb-3 opacity-30"></i>
                                <p>ยังไม่มีรายการจ้า</p>
                            </div>
                        ) : (
                            transactions.map((t) => (
                                <div key={t.id} className={`bg-white p-4 rounded-xl shadow-sm flex justify-between items-center border-l-4 ${t.type === 'income' ? 'border-green-500' : 'border-red-500'}`}>
                                    <div>
                                        <div className="text-lg font-bold text-gray-800">{t.desc}</div>
                                        <div className="text-gray-400 text-xs">{t.date}</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xl font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                            {t.type === 'income' ? '+' : '-'} {t.amount.toLocaleString()}
                                        </span>
                                        <button onClick={() => handleDelete(t.id)} className="text-gray-300 hover:text-red-500">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className={`p-6 text-white text-center text-2xl font-bold ${modalType === 'income' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {modalType === 'income' ? 'บันทึกรายรับ' : 'บันทึกรายจ่าย'}
                        </div>

                        <div className="p-8 space-y-6">
                            <div>
                                <label className="block text-gray-600 mb-2 font-bold">จำนวนเงิน (บาท)</label>
                                <input
                                    type="number"
                                    autoFocus
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full text-3xl p-3 border-2 border-gray-200 rounded-xl focus:border-midnight-blue outline-none text-center font-bold text-midnight-blue"
                                    placeholder="0"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-600 mb-2 font-bold">รายการ (ค่าอะไร)</label>
                                <input
                                    type="text"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className="w-full text-lg p-3 border-2 border-gray-200 rounded-xl focus:border-midnight-blue outline-none"
                                    placeholder={modalType === 'income' ? 'เช่น ค่าเช่าชุด' : 'เช่น ซื้ออุปกรณ์'}
                                />
                            </div>

                            <div className="flex flex-col gap-3 mt-4">
                                <button onClick={handleSave} className="w-full bg-midnight-blue text-white text-xl font-bold py-4 rounded-xl shadow-md hover:bg-blue-900 active:scale-95 transition">
                                    บันทึกข้อมูล
                                </button>
                                <button onClick={() => setShowModal(false)} className="w-full text-gray-400 py-2 hover:text-gray-600">
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
