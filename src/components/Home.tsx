import DefaultCard from "./cards/DefaultCard.tsx";
function Home(){

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?t=st=1719337105~exp=1719340705~hmac=54ee34391a7d67c5d24e4da888c3ceecf37afb7a5cd4e48080ff8f1a257b5941&w=360'
                            description='Manage customer information, track purchase history, and improve customer relationships.'
                            title='Customer'
                            value={250}
                            key={1}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/premium-photo/warehouse-manager_829699-8610.jpg?w=360'
                            description='Organize your inventory, update product details, and monitor stock levels effortlessly.'
                            title='Product'
                            value={250}
                            key={2}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/black-friday-concept-with-products-shopping-cart_23-2147709351.jpg?t=st=1719337321~exp=1719340921~hmac=e1ce554df869f7739d3458b7259414b91180adec38211da14608a7dff02cdbba&w=360'
                            description='Track and manage all orders from initiation to fulfillment in one streamlined interface.'
                            title='Orders'
                            value={250}
                            key={3}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <DefaultCard
                            thumbnail='https://img.freepik.com/free-photo/person-carrying-lot-cash_53876-65367.jpg?t=st=1719337765~exp=1719341365~hmac=de62c89802cadb48dff86d58fc961a0d3d0a1cbd3d8ee5c8a69a167f4d87c437&w=360'
                            description='Monitor your sales revenue, generate financial reports, and gain insights into your earnings.'
                            title='Income'
                            value={250}
                            key={4}
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home;