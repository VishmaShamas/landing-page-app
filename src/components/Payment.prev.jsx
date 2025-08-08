import React from "react";

export default function Payment() {
  return (
    <section className="w-full max-w-xl mx-auto rounded-xl border p-6 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Hardcoded Payment</h2>
        <p className="text-sm text-neutral-500 mt-1">This component is overwritten by the build script.</p>
      </header>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm text-neutral-600">Card Number</span>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
              placeholder="4242 4242 4242 4242"
            />
          </label>
          <label className="block">
            <span className="text-sm text-neutral-600">Expiry</span>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
              placeholder="MM/YY"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-neutral-600">Name on Card</span>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700"
            placeholder="Jane Doe"
          />
        </label>

        <div className="flex items-center justify-between font-medium">
          <span>Total</span>
          <span>$19.00 USD</span>
        </div>

        <button
          className="w-full rounded-md bg-black text-white py-2 font-medium dark:bg-white dark:text-black"
          onClick={() => alert("This is a demo hardcoded payment.")}
        >
          Pay $19.00
        </button>
      </div>
    </section>
  );
}
