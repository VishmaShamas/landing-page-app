import React, { useMemo, useState } from "react";

type PlanKey = "starter" | "pro" | "enterprise";
type Currency = "USD" | "EUR";

const plans: Record<PlanKey, { label: string; price: number }> = {
  starter: { label: "Starter", price: 9 },
  pro: { label: "Pro", price: 29 },
  enterprise: { label: "Enterprise", price: 99 },
};

const coupons: Record<string, number> = {
  SAVE10: 0.1,
  WELCOME20: 0.2,
};

const FX: Record<Currency, number> = { USD: 1, EUR: 0.9 };

export default function Payment({
  plan = "starter",
  onSuccess,
  onError,
}: {
  plan?: PlanKey;
  onSuccess?: (txId: string) => void;
  onError?: (message: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<PlanKey>(plan);
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [coupon, setCoupon] = useState("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [tx, setTx] = useState<string | null>(null);

  const base = plans[selected].price;
  const discount = coupons[coupon.trim().toUpperCase()] ?? 0;
  const fx = FX[currency] ?? 1;
  const total = useMemo(() => Math.max(0, base * (1 - discount)) * fx, [base, discount, fx]);

  async function fakeCharge() {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      const txId = "tx_" + Math.random().toString(36).slice(2, 10);
      setTx(txId);
      onSuccess?.(txId);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      onError?.(msg);
      alert("Payment failed: " + msg);
    } finally {
      setLoading(false);
    }
  }

  if (tx) {
    return (
      <section className="w-full max-w-xl mx-auto rounded-xl border p-6 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800">
        <h2 className="text-2xl font-semibold">Payment successful 🎉</h2>
        <p className="text-sm text-neutral-600 mt-2">Transaction ID: <code>{tx}</code></p>
        <button
          className="mt-6 rounded-md border px-4 py-2 dark:border-neutral-700"
          onClick={() => setTx(null)}
        >
          Make another payment
        </button>
      </section>
    );
  }

  return (
    <section className="w-full max-w-xl mx-auto rounded-xl border p-6 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Checkout</h2>
      </header>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm text-neutral-600">Plan</span>
          <select
            className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
            value={selected}
            onChange={(e) => setSelected(e.target.value as PlanKey)}
          >
            {Object.entries(plans).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label} — {v.price}/mo
              </option>
            ))}
          </select>
        </label>

          <label className="block">
            <span className="text-sm text-neutral-600">Currency</span>
            <select
              className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
            >
              <option>USD</option>
              <option>EUR</option>
            </select>
          </label>

        <label className="block">
          <span className="text-sm text-neutral-600">Card</span>
          <input
            type="text"
            inputMode="numeric"
            className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
            placeholder="4242 4242 4242 4242"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
        </label>

        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>Subtotal</span>
          <span>{plans[selected].price} {currency}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>Discount</span>
          <span>{discount * 100}%</span>
        </div>
        <div className="flex items-center justify-between font-medium">
          <span>Total</span>
          <span>{total.toFixed(2) } {currency}</span>
        </div>

        <button
          disabled={loading || !email || card.replace(/\s+/g, "").length < 16}
          onClick={fakeCharge}
          className="w-full rounded-md bg-black text-white py-2 font-medium disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:text-black"
        >
          {loading ? "Processing..." : `Pay $${total.toFixed(2)} ${currency}`}
        </button>
      </div>
    </section>
  );
}
