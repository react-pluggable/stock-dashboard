import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import stocks from "./defaultValue";
import {
  PluginStore,
  createPluginStore,
  RendererPlugin,
  PluginProvider,
} from "react-pluggable";
import SkeletonPlugin from "./plugins/SkeletonPlugin";
import AuthPlugin from "./plugins/AuthPlugin";
import ContentPlugin from "./plugins/ContentPlugin";
import ChartsPlugin from "./plugins/ChartsPlugin";

export const StockContext = React.createContext(stocks);

const pluginStore: PluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new SkeletonPlugin());
pluginStore.install(new AuthPlugin());
pluginStore.install(new ContentPlugin());
pluginStore.install(new ChartsPlugin());

function App() {
  const [stocksCollection, setStocksCollection] = useState(stocks);
  const setSelectedStock = (id: number) => {
    setStocksCollection({ ...stocksCollection, selectedStockId: id });
  };

  return (
    <div className="bg-light">
      <StockContext.Provider value={stocksCollection}>
        <Header />
        <PluginProvider pluginStore={pluginStore}>
          <Main setSelectedStock={setSelectedStock} />
        </PluginProvider>
      </StockContext.Provider>
    </div>
  );
}

export default App;
