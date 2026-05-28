export default function SuccessPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-2xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-5xl text-emerald-600">✓</span>
                </div>

                <h1 className="mt-8 text-4xl font-bold text-gray-900">
                    Donation Successful
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Thank you for supporting our mission.
                    Your contribution will help change lives.
                </p>

                <div className="mt-10 rounded-2xl bg-emerald-50 p-6">
                    <p className="text-lg font-medium text-emerald-700">
                        Payment Verified Successfully
                    </p>
                </div>

                <a
                    href="/donate"
                    className="mt-10 inline-block rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
                >
                    Back
                </a>
            </div>
        </main>
    );
}