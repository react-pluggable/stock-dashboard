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
          value: 24180.71,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 22280.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 26300.23,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 23260.45,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 22200.5,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 18240.4,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 16300.7,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 20310.12,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 22320.23,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 23360.12,
        },
      ],
    },
    {
      id: 2,
      name: "NIFTY 50",
      data: [
        {
          date: "2019-10-11",
          percent: 2.54,
          value: 24340.0,
        },
        {
          date: "2019-10-12",
          percent: 2.2,
          value: 22320.0,
        },
        {
          date: "2019-10-13",
          percent: 2.4,
          value: 18300.0,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-15",
          percent: 2.8,
          value: 20260.0,
        },
        {
          date: "2019-10-16",
          percent: 2.1,
          value: 22240.0,
        },
        {
          date: "2019-10-17",
          percent: 2.12,
          value: 20220.0,
        },
        {
          date: "2019-10-18",
          percent: 2.14,
          value: 22200.0,
        },
        {
          date: "2019-10-19",
          percent: 2.16,
          value: 20100.0,
        },
        {
          date: "2019-10-20",
          percent: 2.17,
          value: 24000.0,
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
          value: 23100.11,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 24200.21,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 25220.23,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 26240.45,
        },
        {
          date: "2019-10-16",
          percent: 2.5,
          value: 27220.67,
        },
        {
          date: "2019-10-17",
          percent: 2.1,
          value: 28200.76,
        },
        {
          date: "2019-10-18",
          percent: 2.0,
          value: 25100.45,
        },
        {
          date: "2019-10-19",
          percent: 2.9,
          value: 23000.45,
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
          value: 21100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 22200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 23220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 24240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 25260.0,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 26280.0,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 27300.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 28320.0,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 26340.0,
        },
      ],
    },
    {
      id: 5,
      name: "Tesla",
      data: [
        {
          date: "2019-10-11",
          percent: 2.82,
          value: 24340.0,
        },
        {
          date: "2019-10-12",
          percent: 2.2,
          value: 22320.0,
        },
        {
          date: "2019-10-13",
          percent: 2.4,
          value: 18300.0,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-15",
          percent: 2.8,
          value: 20260.0,
        },
        {
          date: "2019-10-16",
          percent: 2.1,
          value: 22240.0,
        },
        {
          date: "2019-10-17",
          percent: 2.12,
          value: 20220.0,
        },
        {
          date: "2019-10-18",
          percent: 2.14,
          value: 22200.0,
        },
        {
          date: "2019-10-19",
          percent: 2.16,
          value: 20100.0,
        },
        {
          date: "2019-10-20",
          percent: 2.17,
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
          value: 10000.0,
        },
        {
          date: "2019-10-12",
          percent: 2.0,
          value: 12100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 14200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 13220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 14240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.5,
          value: 13220.0,
        },
        {
          date: "2019-10-17",
          percent: 2.1,
          value: 15200.0,
        },
        {
          date: "2019-10-18",
          percent: 2.0,
          value: 14100.0,
        },
        {
          date: "2019-10-19",
          percent: 2.9,
          value: 16000.0,
        },
        {
          date: "2019-10-20",
          percent: 2.9,
          value: 15050.0,
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
          value: 28100.0,
        },
        {
          date: "2019-10-13",
          percent: 2.1,
          value: 34200.0,
        },
        {
          date: "2019-10-14",
          percent: 2.5,
          value: 38220.0,
        },
        {
          date: "2019-10-15",
          percent: 2.9,
          value: 35240.0,
        },
        {
          date: "2019-10-16",
          percent: 2.4,
          value: 34260.0,
        },
        {
          date: "2019-10-17",
          percent: 2.6,
          value: 35280.0,
        },
        {
          date: "2019-10-18",
          percent: 2.8,
          value: 39300.0,
        },
        {
          date: "2019-10-19",
          percent: 2.0,
          value: 34320.0,
        },
        {
          date: "2019-10-20",
          percent: 2.2,
          value: 36340.0,
        },
      ],
    },
    {
      id: 8,
      name: "DEEPAKNTR",
      data: [
        {
          date: "2019-10-11",
          percent: 2.0,
          value: 24340.0,
        },
        {
          date: "2019-10-12",
          percent: 2.2,
          value: 22320.0,
        },
        {
          date: "2019-10-13",
          percent: 2.4,
          value: 18300.0,
        },
        {
          date: "2019-10-14",
          percent: 2.6,
          value: 24280.0,
        },
        {
          date: "2019-10-15",
          percent: 2.8,
          value: 20260.0,
        },
        {
          date: "2019-10-16",
          percent: 2.1,
          value: 22240.0,
        },
        {
          date: "2019-10-17",
          percent: 2.12,
          value: 20220.0,
        },
        {
          date: "2019-10-18",
          percent: 2.14,
          value: 22200.0,
        },
        {
          date: "2019-10-19",
          percent: 2.16,
          value: 20100.0,
        },
        {
          date: "2019-10-20",
          percent: 2.17,
          value: 24000.0,
        },
      ],
    },
  ],
};

export default stockData;
