
const ErrorPage = () => {
    return (
        <section className="flex justify-center items-center h-screen mx-5">
            <div className="py-8 px-4  w-fit lg:py-16 lg:px-6 rounded-lg card-shadow">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Somethings missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can not find that page. You will find lots to explore on the home page.</p>
                    <a href="/" className="inline-flex bg-mainColor font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;