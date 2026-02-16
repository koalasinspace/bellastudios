'use client';

import { Card } from '@/components/ui/ZeroUI';

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Billing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 space-y-8">
          <h2 className="text-xl font-bold text-white">Current Plan</h2>
          <p className="text-gray-400">You are currently on the <span className="text-pink-500">Free</span> plan.</p>
          <button className="w-full py-2 px-4 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg hover:opacity-90 transition-opacity">
            Upgrade to Pro
          </button>
        </Card>
        <Card className="p-8 space-y-8">
          <h2 className="text-xl font-bold text-white">Payment Method</h2>
          <p className="text-gray-400">Your payment method is not set up yet.</p>
          <button className="w-full py-2 px-4 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg hover:opacity-90 transition-opacity">
            Add Payment Method
          </button>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white mb-4">Payment History</h2>
        <Card className="p-8">
          <p className="text-gray-400">No payment history yet.</p>
        </Card>
      </div>
    </div>
  );
}
