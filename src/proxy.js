const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/swiggy-update", async (req, res) => {
  try {
    const response = await axios.post(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
          origin: "https://www.swiggy.com",
          referer: "https://www.swiggy.com/restaurants",
          cookie: `
            __SW=a_vG7zUKTs4Y6pGE8qvssSYc9JWSYFxT;
            _device_id=5c3bd97b-1551-c59f-3dcf-dac10269ec26;
            fontsLoaded=1;
            _gcl_au=1.1.604073344.1750009584;
            _gid=GA1.2.67450176.1750178007;
            dadl=true;
            _guest_tid=317a431b-1351-4ae4-b349-8c870d36abe6;
            _sid=l8lef58b-1bcc-4d80-80e0-19700cb72243;
            userLocation={"lat":22.5753931,"lng":88.47979029999999,"address":"Newtown, Kolkata, West Bengal, India","area":"","showUserDefaultAddressHint":false};
            _ga_YE38MFJRBZ=GS2.1.s1750262900$o5$g1$t1750262950$j10$l0$h0;
            _ga_34JYJ0BCRN=GS2.1.s1750262900$o5$g1$t1750262950$j10$l0$h0;
            _ga=GA1.1.1791665760.1750009584;
          `.replace(/\s+/g, " "), // removes line breaks
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy Error:", error.message);
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: "Swiggy API Error", data: error.response.data });
    } else {
      res.status(500).json({ error: "Internal Proxy Error", message: error.message });
    }
  }
});


const PORT = 4000;
app.listen(PORT, () =>
  console.log(`🚀 Proxy running on http://localhost:${PORT}`)
);
