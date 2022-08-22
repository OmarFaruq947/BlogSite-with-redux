import { Provider, useSelector } from "react-redux";

import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import SearchBox from "./Components/SearchBox";
import Store from "./Redux/Store";






function App() {
  const cards = useSelector((state) => state.filter);
  console.log("cards",cards);
 
  return (
    <Provider store={Store}>
      <>
        {/* navigation */}
        <Navigation />
        {/* search */}
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
          <SearchBox />
        </div>
        <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                ALL BLOGS ARE HERE
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            {/* card grid  */}
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {/* single card  */}

{
  cards.map((card)=>( <Card card={card} key={card.id}/>))
}



              {/* <Card />
              <Card />
              <Card /> */}
            </div>
          </div>
        </section>
        {/* footer */}
        <section className="pt-6">
          <Footer />
        </section>
      </>
    </Provider>
  );
}

export default App;
