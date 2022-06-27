module.exports = ({ name, price1, price2, receiptId }) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
       <link
       href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&amp;display=swap"
       rel="stylesheet"
     />
     <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
     />
     <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <title>PDF Result Template</title>
          <style>
          body {
            font-family: "Roboto", sans-serif;
          }
    
          .font-14-bold {
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
          }
    
          .font-10-bold {
            font-size: 10px;
            font-weight: 500;
            line-height: 20px;
          }
    
          .font-10 {
            font-size: 10px;
            line-height: 20px;
          }
    
          .font-12-bold {
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
          }
    
          .font-12 {
            font-size: 12px;
            line-height: 20px;
          }
    
          .percent {
            font-size: 10px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.5);
          }
    
          .item-name {
            font-size: 12px;
            line-height: 20px;
            font-weight: 500;
          }
    
          .item-desc {
            font-size: 10px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.5);
          }
    
          .party-address-title {
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
          }
    
          .party-name {
            font-size: 12px;
            line-height: 15px;
            font-weight: 500;
          }
    
          .party-address {
            font-size: 10px;
            line-height: 14px;
          }
    
          .inv-detail {
            font-size: 12px;
            line-height: 20px;
            font-weight: 500;
          }
    
          .extra-detail {
            font-size: 12px;
            line-height: 20px;
          }
    
          .company-address,
          .gst-details,
          .party-address {
            font-size: 12px;
            font-weight: normal;
            line-height: 16px;
          }
    
          .logo {
            width: 100px;
            height: 100px;
          }
    
          .company-name {
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;
          }
    
          .signature {
            height: 61px;
            width: 114px;
            margin-left: auto;
            margin-right: auto;
          }
    
          .signature img {
            width: 100%;
          }
    
          /*column-section*/
    
          .column-20 {
            width: 20%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-25 {
            width: 25%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-30 {
            width: 30%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-33 {
            width: 33.33%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-35 {
            width: 35%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-40 {
            width: 40%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-45 {
            width: 45%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-50 {
            width: 50%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-55 {
            width: 55%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-60 {
            width: 60%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-70 {
            width: 70%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-75 {
            width: 75%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-80 {
            width: 80%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-90 {
            width: 80%;
            display: table-cell;
            vertical-align: top;
          }
    
          .column-100 {
            width: 100%;
            display: table-cell;
            vertical-align: top;
          }
    
          .container {
            display: table;
            border-collapse: collapse;
            width: 100%;
          }
    
          /*table display css*/
    
          .table {
            display: table;
          }
    
          .row {
            display: table-row;
          }
    
          .table-cell {
            display: table-cell;
          }
    
          .table-header {
            display: table-cell;
            height: 30px;
            vertical-align: middle;
            /*padding-left: 5px;*/
            /*padding-right: 5px;*/
            text-align: center;
            font-size: 12px;
            line-height: 20px;
            font-weight: 500;
          }
    
          .table-row-cell,
          .table-amt-cell {
            display: table-cell;
            height: 49px;
            padding-left: 2px;
            padding-right: 2px;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
          }
    
          .table-charges-cell {
            display: table-cell;
            height: 30px;
            padding-left: 2px;
            padding-right: 2px;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
          }
    
          .multi-row-header {
            display: table-cell;
            height: 49px;
            vertical-align: middle;
            text-align: center;
            font-size: 10px;
            line-height: 20px;
            font-weight: bold;
          }
    
          .multi-row-cell {
            display: table-cell;
            height: 49px;
            vertical-align: middle;
            font-size: 10px;
            line-height: 20px;
            text-align: right;
          }
    
          .hsn .multi-row-cell {
            vertical-align: middle;
          }
    
          .hsn .table-row-cell {
            vertical-align: middle;
          }
    
          .table-amt-cell {
            height: 30px;
          }
    
          .table-header:not(:last-child) {
            border-right: 1px solid black;
          }
    
          .table-row-cell:not(:last-child) {
            border-right: 1px solid black;
          }
    
          .table-amt-cell:not(:last-child) {
            border-right: 1px solid black;
          }
    
          .table-charges-cell:not(:last-child) {
            border-right: 1px solid black;
          }
    
          /*padding section*/
          .padding-top-3 {
            padding-top: 3px;
          }
    
          .padding-top-5 {
            padding-top: 5px;
          }
    
          .padding-right-5 {
            padding-right: 5px;
          }
    
          .padding-5-exclude-bt {
            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
          }
    
          .padding-5-exclude-tp {
            padding-bottom: 5px;
            padding-left: 5px;
            padding-right: 5px;
          }
    
          .padding-5 {
            padding: 5px;
          }
    
          .padding-bottom-10 {
            padding-bottom: 10px;
          }
    
          .padding-left-10 {
            padding-left: 10px;
          }
    
          .padding-top-10 {
            padding-top: 10px;
          }
    
          .padding-right-10 {
            padding-right: 10px;
          }
    
          .padding-10 {
            padding: 10px;
          }
    
          /*border-section*/
          .border-top-1 {
            border-top: 1px solid black;
          }
    
          .border-bottom-1 {
            border-bottom: 1px solid black;
          }
    
          .border-left-1 {
            border-left: 1px solid black;
          }
    
          .border-right-1 {
            border-right: 1px solid black;
          }
    
          .border-1 {
            border: 1px solid black;
          }
    
          .border-exclude-top {
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
          }
    
          /*height section*/
    
          .ht-24 {
            height: 24px;
          }
    
          .ht-25 {
            height: 25px;
          }
    
          .ht-49 {
            height: 49px;
          }
    
          .ht-81 {
            height: 81px;
          }
    
          /*widths % section*/
          .width-10 {
            width: 10%;
          }
    
          .width-20 {
            width: 20%;
          }
    
          .width-25 {
            width: 25%;
          }
    
          .width-33 {
            width: 33.33%;
          }
    
          .width-40 {
            width: 40%;
          }
    
          .width-45 {
            width: 45%;
          }
    
          .width-50 {
            width: 50%;
          }
    
          .width-55 {
            width: 55%;
          }
    
          .width-75 {
            width: 75%;
          }
    
          .width-80 {
            width: 80%;
          }
    
          .width-100 {
            width: 100%;
          }
    
          /*width px section*/
    
          .wdt-20 {
            width: 20px;
          }
    
          .wdt-30 {
            width: 30px;
          }
    
          .wdt-59 {
            width: 59px;
          }
    
          .wdt-65 {
            width: 65;
          }
    
          .wdt-71 {
            width: 71px;
          }
    
          .wdt-78 {
            width: 78px;
          }
    
          .wdt-79 {
            width: 79px;
          }
    
          .wdt-80 {
            width: 80px;
          }
    
          .wdt-86 {
            width: 86px;
          }
    
          .wdt-91 {
            width: 91px;
          }
    
          .wdt-180 {
            width: 180px;
          }
    
          .wdt-103 {
            width: 103px;
          }
    
          .wdt-140 {
            width: 140px;
          }
    
          .wdt-153 {
            width: 153px;
          }
    
          .wdt-195 {
            width: 195px;
          }
    
          /*utils*/
    
          .text-center {
            text-align: center;
          }
    
          .text-left {
            text-align: left;
          }
    
          .text-right {
            text-align: right;
          }
    
          .vertical-middle {
            vertical-align: middle;
          }
    
          .bold {
            font-weight: bold;
          }
    
          .italic {
            font-style: italic;
          }
    
          .word-break {
            word-break: break-all;
          }
    
          /*theme-colors*/
    
          .grey {
            color: #000000;
          }
    
          .grey-bg {
            background: #e2e2e2;
          }
    
          .green {
            color: #407400;
          }
    
          .green-bg {
            background: #dff0ca;
          }
    
          .blue {
            color: #0b6a9f;
          }
    
          .blue-bg {
            background: #cfeaf9;
          }
    
          .violet {
            color: #840bb2;
          }
    
          .violet-bg {
            background: #e9ccf4;
          }
    
          .pink {
            color: #c11111;
          }
    
          .pink-bg {
            background: #f4cccc;
          }
    
          .rich-blue {
            color: #5b57ae;
          }
    
          .rich-blue-bg {
            background: #dbdaf3;
          }
    
          .gold {
            color: #cd9d23;
          }
    
          .gold-bg {
            background: #f1e7cf;
          }
    
          .orange {
            color: #bf6200;
          }
    
          .orange-bg {
            background: #f9e5cf;
          }
    
          /*margins section*/
    
          .margin-top-5 {
            margin-top: 5px;
          }
    
          .margin-auto {
            margin-left: auto;
            margin-right: auto;
          }
    
          .margin-left-50 {
            margin-left: 60%;
          }
    
          .margin-left-60 {
            margin-left: 60%;
          }
    
          .margin-left-70 {
            margin-left: 70%;
          }
    
          .margin-left-90 {
            margin-left: 90%;
          }
          </style>
          </head>
          <body style="background-color: white">
    <div class="main-container">
      <div class="container">
        <div class="row">
          <div class="column-30 bold font-12-bold">TAX INVOICE</div>
          <div class="column-70 font-12 text-right">
            Business Karne Ka Naya Tareeka
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row border-1">
          <div class="column-50 border-right-1 padding-5">
            <div class="column-20">
              <img
                class="logo"
                src="https://storage.googleapis.com/content-flobooks-in/flobooks/company_logo.png"
              />
            </div>
            <div class="column-80 padding-left-10 vertical-middle">
              <div class="company-name padding-bottom-5 text_color grey">
                My BillBook
              </div>
              <div class="company-address">
                #56, 2nd Floor, 12th Main Road, Sector 6, HSR Layout Land Mark:,
                next to Rasaganga Veg Restaurant, HSR BDA, Bengaluru, Karnataka
                560102
              </div>
              <div class="company-address font-12">Karnataka</div>
              <div class="table width-100 gst-details">
                <div class="row">
                  <div class="table-cell width-50 padding-top-5">
                    GSTIN: 29AAGDV9438F1ZR
                  </div>
                  <div class="table-cell width-50 padding-top-5">
                    Mobile: XXXXXX1379
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-50 vertical-middle">
            <div class="table width-100 inv-detail">
              <div class="column-33 text-center">
                <div>Invoice Number</div>
                <div>157</div>
              </div>
              <div class="column-33 text-center">
                <div>Invoice Date</div>
                <div>10-06-2020</div>
              </div>
              <div class="column-33 text-center">
                <div>Due Date</div>
                <div>10-07-2020</div>
              </div>
            </div>
            <div class="table width-100 extra-detail border-top-1">
              <div class="column-33 text-center padding-top-10">
                <div>PO Bill No</div>
                <div>1234565</div>
              </div>
              <div class="column-33 text-center padding-top-10">
                <div>E-way Bill No</div>
                <div>E123455</div>
              </div>
              <div class="column-33 text-center padding-top-10">
                <div>Vehicle No</div>
                <div>KA-00-9H-6573</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-exclude-top">
        <div class="row">
          <div class="column-50 border-right-1 padding-5">
            <div class="table width-100">
              <div class="row font-12-bold">BILL TO</div>
              <div class="row">
                <div class="party-name">Rakesh Enterprises</div>
              </div>
              <div class="row width-100">
                <div class="table party-address width-100">
                  <div class="row">
                    <div class="column-20 padding-top-3">Address</div>
                    <div class="column-80 padding-top-3">
                      2nd Floor, 12th Main Road, Sector 6,Mysore, Karnataka,
                      570001
                    </div>
                  </div>
                </div>
              </div>
              <div class="row party-address">
                <div class="table width-100">
                  <div class="row">
                    <div class="column-20 padding-top-3">Place of supply:</div>
                    <div class="column-80 padding-top-3">Karnataka</div>
                  </div>
                </div>
              </div>
              <div class="row party-address"></div>
              <div class="row party-address"></div>
            </div>
          </div>
          <div class="column-50 padding-5">
            <div class="table width-100">
              <div class="row font-12-bold">SHIP TO</div>
              <div class="row">
                <div class="party-name">Rakesh Enterprises</div>
              </div>
              <div class="row width-100">
                <div class="table party-address width-100">
                  <div class="row">
                    <div class="column-20">Address</div>
                    <div class="column-80 padding-top-3">
                      2nd Floor, 12th Main Road, Sector 6,Mysore, Karnataka,
                      570001
                    </div>
                  </div>
                </div>
              </div>
              <div class="row party-address"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-exclude-top">
        <div class="row border-bottom-1 bg_color grey-bg">
          <div class="wdt-30 table-header">S.NO</div>
          <div class="wdt-140 table-header">ITEMS</div>
          <div class="wdt-59 table-header">HSN</div>
          <div class="wdt-80 table-header">QTY</div>
          <div class="wdt-71 table-header">MRP</div>
          <div class="wdt-86 table-header">RATE/ITEM</div>
          <div class="wdt-78 table-header">DISCOUNT</div>
          <div class="wdt-65 table-header">CGST</div>
          <div class="wdt-65 table-header">SGST</div>

          <div class="wdt-91 table-header">AMOUNT</div>
        </div>
   

        <div class="row">
        
          <div class="wdt-30 table-row-cell text-center">1</div>
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Samsung S10</div>
            <div class="item-desc">Imei - 6654r6t11381</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1236</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">52000.0</div>
          <div class="wdt-86 table-row-cell">52000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">0.0</div>
            <div class="percent">0.0 %</div>
          </div>
          <div class="wdt-65 table-row-cell">
            <div class="amount">1300.0</div>
            <div class="percent">2.5 %</div>
          </div>

          <div class="wdt-65 table-row-cell">
            <div class="amount">1300.0</div>
            <div class="percent">2.5 %</div>
          </div>

          <div class="wdt-91 table-row-cell">54600.0</div>
        </div>
        <div class="row">
          
          <div class="wdt-30 table-row-cell text-center">2</div>
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Iphone XR</div>
            <div class="item-desc">Imei - 3654r6t11381</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1237</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">56000.0</div>
          <div class="wdt-86 table-row-cell">56000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">0.0</div>
            <div class="percent">0.0 %</div>
          </div>
          <div class="wdt-65 table-row-cell">
            <div class="amount">1400.0</div>
            <div class="percent">2.5 %</div>
          </div>

          <div class="wdt-65 table-row-cell">
            <div class="amount">1400.0</div>
            <div class="percent">2.5 %</div>
          </div>

          <div class="wdt-91 table-row-cell">58800.0</div>
        </div>
      
        <div class="row">
          <div class="wdt-30 table-charges-cell text-center"></div>
          <div
            class="wdt-140 table-charges-cell text-right bold italic padding-right-10"
          >
            Shipping Charge
          </div>
          <div class="wdt-59 table-charges-cell text-center">-</div>
          <div class="wdt-80 table-charges-cell text-center">-</div>
          <div class="wdt-71 table-charges-cell text-center">-</div>
          <div class="wdt-86 table-charges-cell text-center">-</div>
          <div class="wdt-78 table-charges-cell text-center">-</div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-91 table-charges-cell">250.0</div>
        </div>
        <div class="row ht-25">
          <div class="wdt-30 table-charges-cell text-center"></div>
          <div
            class="wdt-140 table-charges-cell text-right bold italic padding-right-10"
          >
            Discount
          </div>
          <div class="wdt-59 table-charges-cell text-center">-</div>
          <div class="wdt-80 table-charges-cell text-center">-</div>
          <div class="wdt-71 table-charges-cell text-center">-</div>
          <div class="wdt-86 table-charges-cell text-center">-</div>
          <div class="wdt-78 table-charges-cell text-center">-</div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-91 table-charges-cell">248.91</div>
        </div>
      
        <div class="row border-top-1 bg_color grey-bg">
          <div class="wdt-30 table-amt-cell text-center"></div>
          <div
            class="wdt-140 table-amt-cell text-left item-name vertical-middle"
          >
            TOTAL AMOUNT
          </div>
          <div class="wdt-59 table-amt-cell text-center">-</div>
          <div class="wdt-80 table-amt-cell text-center vertical-middle">
            4.0
          </div>
          <div class="wdt-71 table-charges-cell text-center">-</div>
          <div class="wdt-86 table-amt-cell text-center">-</div>
          <div class="wdt- table-amt-cell text-center">-</div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-91 table-amt-cell bold vertical-middle">
            144271.09
          </div>
        </div>
        <div class="row border-top-1">
          <div class="wdt-30 table-amt-cell text-center"></div>
          <div
            class="wdt-140 table-amt-cell text-left item-name vertical-middle"
          >
            RECEIVED AMOUNT
          </div>
          <div class="wdt-59 table-amt-cell text-center">-</div>
          <div class="wdt-80 table-amt-cell text-center">-</div>
          <div class="wdt-71 table-charges-cell text-center">-</div>
          <div class="wdt-86 table-amt-cell text-center">-</div>
          <div class="wdt-78 table-amt-cell text-center">-</div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-91 table-amt-cell bold vertical-middle">2500.0</div>
        </div>
        <div class="row border-top-1">
          <div class="wdt-30 table-amt-cell text-center"></div>
          <div
            class="wdt-180 table-amt-cell text-left item-name vertical-middle"
          >
            BALANCE AMOUNT
          </div>
          <div class="wdt-59 table-amt-cell text-center">-</div>
          <div class="wdt-80 table-amt-cell text-center">-</div>
          <div class="wdt-71 table-charges-cell text-center">-</div>
          <div class="wdt-86 table-amt-cell text-center">-</div>
          <div class="wdt-78 table-amt-cell text-center">-</div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-65 table-header"></div>
          <div class="wdt-91 table-amt-cell bold vertical-middle">
            141771.09
          </div>
        </div>
      </div>
      <div class="container border-exclude-top">
        <div class="row">
          <div class="column-35 padding-5 border-right-1 ht-81">
            <div class="bold font-12-bold">Terms and Conditions</div>
            <div class="font-12">
              10 days return policy. Damaged items won't be taken back Bill is
              compulsory for returning items
            </div>
          </div>
          <div class="column-25 padding-5 border-right-1 ht-81">
            <div class="font-12-bold">BANK DETAILS</div>
            <div class="table width-100 font-12">
              <div class="row">
                <div class="column-40">Account Number:</div>
                <div class="column-60">123455667788990</div>
              </div>
              <div class="row">
                <div class="column-40">IFSC code:</div>
                <div class="column-60">SBIN0000811</div>
              </div>
              <div class="row">
                <div class="column-40">Bank &amp; Branch:</div>
                <div class="column-60">State Bank of India, AVANIGADDA</div>
              </div>
            </div>
          </div>
          <div class="column-20 padding-5 border-right-1">
            <div class="table width-100 font-12">
              <div class="row">
                <div class="column-55">
                  <div class="bold">Scan QR code with UPI app to pay</div>
                  <div>UPI Id</div>
                  <div>pmcares@sbi</div>
                </div>
                <div class="column-45 padding-left-10">
                  <!--?xml version="1.0" standalone="yes"?-->
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:ev="http://www.w3.org/2001/xml-events"
                    width="88.2"
                    height="88.2"
                    shape-rendering="crispEdges"
                  >
                    
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="column-20 padding-5">
            <div class="signature">
              <img
                src="https://storage.googleapis.com/content-flobooks-in/flobooks/Signature.png"
              />
            </div>
            <div class="font-12 text-center">Authorised Signature</div>
          </div>
        </div>
      </div>
    </div>
    <script src="../scripts/theme.js"></script>

          </body>
          </html>
   `;
};
