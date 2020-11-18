const stockData = {
  selectedStockId: 1,
  stocks: [
    {
      id: 1,
      name: "SENSEX",
      data: [
        {
          date: "2019-10-11",
          percent: 1.2,
          value: 43630.71,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.23,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 24220.45,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.5,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 24260.4,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 24280.7,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 24300.12,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24320.23,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 24340.12,
        },
      ],
    },
    {
      id: 2,
      name: "NIFTY 50",
      data: [
        {
          date: "2019-10-11",
          percent: 2.2,
          value: 24340.12,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24320.34,
        },
        {
          date: "2019-10-13",
          percent: 2.8,
          value: 24300.45,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.23,
        },
        {
          date: "2019-10-15",
          percent: 2.4,
          value: 24260.56,
        },
        {
          date: "2019-10-16",
          percent: 2.9,
          value: 24240.67,
        },
        {
          date: "2019-10-17",
          percent: 2.5,
          value: 24220.87,
        },
        {
          date: "2019-10-18",
          percent: 2.1,
          value: 24200.78,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24100.89,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 24000.01,
        },
      ],
    },
    {
      id: 3,
      name: "LT",
      data: [
        {
          date: "2019-10-11",
          percent: 2.9,
          value: 24000.01,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24100.11,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.21,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 24220.23,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.45,
        },
        {
          date: "2019-10-16",
          percent: 2.5,
          value: 24220.67,
        },
        {
          date: "2019-10-17",
          percent: 2.1,
          value: 24200.76,
        },
        {
          date: "2019-10-18",
          percent: 2.0,
          value: 24100.45,
        },
        {
          date: "2019-10-19",
          percent: 2.9,
          value: 24000.45,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 24050.45,
        },
      ],
    },
    {
      id: 4,
      name: "DHFL",
      data: [
        {
          date: "2019-10-11",
          percent: 2.9,
          value: 24000.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 24260.0,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 24300.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24320.0,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 24340.0,
        },
      ],
    },
    {
      id: 5,
      name: "Tesla",
      data: [
        {
          date: "2019-10-11",
          percent: 2.2,
          value: 24340.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24320.0,
        },
        {
          date: "2019-10-13",
          percent: 2.8,
          value: 24300.0,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-15",
          percent: 2.4,
          value: 24260.0,
        },
        {
          date: "2019-10-16",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-17",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-18",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 24000.0,
        },
      ],
    },
    {
      id: 6,
      name: "GM",
      data: [
        {
          date: "2019-10-11",
          percent: 2.9,
          value: 24000.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-17",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-18",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-19",
          percent: 2.9,
          value: 24000.0,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 24050.0,
        },
      ],
    },
    {
      id: 7,
      name: "Indigo",
      data: [
        {
          date: "2019-10-11",
          percent: 2.9,
          value: 24000.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 24260.0,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 24300.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24320.0,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 24340.0,
        },
      ],
    },
    {
      id: 8,
      name: "DEEPAKNTR",
      data: [
        {
          date: "2019-10-11",
          percent: 2.2,
          value: 24340.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 24320.0,
        },
        {
          date: "2019-10-13",
          percent: 2.8,
          value: 24300.0,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-15",
          percent: 2.4,
          value: 24260.0,
        },
        {
          date: "2019-10-16",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-17",
          percent: 2.5,
          value: 24220.0,
        },
        {
          date: "2019-10-18",
          percent: 2.1,
          value: 24200.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 24100.0,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 24000.0,
        },
      ],
    },
  ],
};

export default stockData;
