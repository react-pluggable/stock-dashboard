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
import PanelPlugin from "./plugins/PanelPlugin";

export const StockContext = React.createContext(stocks);

const pluginStore: PluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new PanelPlugin());

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
