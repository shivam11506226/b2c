import React, { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Viewpricebtn from "./Viewpricebtn";
import Viewflightdetails from "./Viewflightdetails";
import Viewtravvolt from "./Viewtravvolt";
import Viewsupper from "./Viewsupper";
import Viewsaver from "./Viewsaver";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import ReactPaginate from "react-paginate";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Items({ currentItems }) {
  const [value, setValue] = useState(true);
  const reducerState = useSelector((state) => state);
  const clickme = () => {
    console.log(value);
    setValue(!value);
  };
  const results = reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  const items = [...Array(results[0].length).keys()];
  
  console.log("resultjdsklfsalkfslkhfalkfhakfhaskfafhalkf", results[0]);
  return (
    currentItems && currentItems.map((item) => {
      const date = new Date(results[0][item]?.Segments[0][0]?.Duration); 
     const time = date.toTimeString().slice(0, 5);
      return(
      <>
     <Box sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: '10px', }} my={3}>
      <Accordion>
        <AccordionSummary>
          <Grid container p={2} display='flex' justifyContent='center'>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center' >
              <Box px={1}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>  {results[0][item]?.Segments[0][0]?.Airline?.AirlineName}</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>{results[0][item]?.Segments[0][0]?.Airline?.AirlineCode}{results[0][item]?.Segments[0][0]?.Airline?.FlightNumber}</Typography>
              </Box>
            </Grid>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
              <Box px={1}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{results[0][item]?.Segments[0][0]?.Origin?.DepTime}</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>{results[0][item]?.Segments[0][0]?.Origin?.Airport?.CityName}</Typography>
              </Box>
            </Grid>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
              <Box px={1}>
                <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>{new Date(results[0][item]?.Segments[0][0]?.Duration).toTimeString().slice(0, 5)}</Typography>
                <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#707070' }}>1 Stop via Jaipur</Typography>
              </Box>
            </Grid>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
              <Box px={1}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>{results[0][item]?.Segments[0][0]?.Destination?.ArrTime}</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>{results[0][item]?.Segments[0][0]?.Destination?.Airport?.CityName}</Typography>
              </Box>
            </Grid>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
              <Box px={1}>
                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#FF8900' }}>${results[0][item]?.Fare?.PublishedFare}</Typography>
              </Box>
            </Grid>
            <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
              <Button variant="contained" onClick={clickme} sx={{ borderRadius: '30px', background: '#4260D8 0% 0% no-repeat padding-box' }} endIcon={<SendIcon />}>View Price</Button>
            </Grid>
            <Grid md={12} display='flex' justifyContent='right' alignItems='right'>
            <Typography sx={{ color: '#0AFF2B', fontSize: '14px', fontWeight: 'bold', }}>Use Travvolt and get Rs 299 instant discount</Typography>
            </Grid>

          </Grid>

        </AccordionSummary>
        <AccordionDetails>
          <Grid container display='flex' justifyContent='space-between' >
            <Viewflightdetails />
          </Grid>
          <Box className={(value) => value ? "active" : "inactive"}>
            <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
              <Viewpricebtn />
            </Grid>
            <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
              <Viewsaver />
            </Grid>
            <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
              <Viewsupper />
            </Grid>
            <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
              <Viewtravvolt />
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
      </>  
      )
    })
  );
}

//  function temp(){
//   const [value, setValue] = useState(true);
//   const clickme = () => {
//     console.log(value);
//     setValue(!value);
//   };
// return(
//   <Box sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: '10px', }} my={3}>
//     <Accordion>
//       <AccordionSummary>
//         <Grid container p={2} display='flex' justifyContent='center'>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center' >
//             <Box sx={{ width: '36px', height: '36px', border: '1px solid gray' }} >

//             </Box>
//             <Box px={1}>
//               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>IndiGO</Typography>
//               <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>6E 2431, 6E 909</Typography>
//             </Box>
//           </Grid>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
//             <Box px={1}>
//               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
//               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
//             </Box>
//           </Grid>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
//             <Box px={1}>
//               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>09h 15m</Typography>
//               <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#707070' }}>1 Stop via Jaipur</Typography>
//             </Box>
//           </Grid>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
//             <Box px={1}>
//               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
//               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
//             </Box>
//           </Grid>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
//             <Box px={1}>
//               <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#FF8900' }}>$3453</Typography>
//             </Box>
//           </Grid>
//           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
//             <Button variant="contained" onClick={clickme} sx={{ borderRadius: '30px', background: '#4260D8 0% 0% no-repeat padding-box' }} endIcon={<SendIcon />}>View Price</Button>
//           </Grid>
//           <Grid md={12} display='flex' justifyContent='right' alignItems='right'>
//           <Typography sx={{ color: '#0AFF2B', fontSize: '14px', fontWeight: 'bold', }}>Use Travvolt and get Rs 299 instant discount</Typography>
//           </Grid>

//         </Grid>

//       </AccordionSummary>
//       <AccordionDetails>
//         <Grid container display='flex' justifyContent='space-between' >
//           <Viewflightdetails />
//         </Grid>
//         <Box className={(value) => value ? "active" : "inactive"}>
//           <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
//             <Viewpricebtn />
//           </Grid>
//           <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
//             <Viewsaver />
//           </Grid>
//           <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
//             <Viewsupper />
//           </Grid>
//           <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
//             <Viewtravvolt />
//           </Grid>
//         </Box>
//       </AccordionDetails>
//     </Accordion>
//   </Box>
// );
// }

// ===================================
// export default function BasicGrid() {
//   const reducerState = useSelector((state) => state);
//   const results = reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
  
//   // ============================================> paginations =================================//
  
//   if(results){
//     const items = [...Array(results[0].length).keys()];
//     const itemsPerPage = 5;
   
// +   const [currentItems, setCurrentItems] = useState(null);
//     const [pageCount, setPageCount] = useState(0);
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);
  
   
  
//     // Invoke when user click to request another page.
//     const handlePageClick = (event) => {
//       const newOffset = event.selected * itemsPerPage % items.length;
//       console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//       setItemOffset(newOffset);
//     };
//     return (
//       <>

       

//         <Items currentItems={currentItems} />
//         <ReactPaginate
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={10}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         renderOnZeroPageCount={null}
//       />   
//       </>
//     );
//   }else if(reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Error?.ErrorMessage === "No Result Found"){
//     return (
//       <> 

//       </>
//     );
//   } 
// }
// ===================================


// New Code 
export default function BasicGrid(){
  const reducerState = useSelector((state) => state);
    const results = reducerState?.oneWay?.oneWayData?.data?.data?.Response?.Results;
    const [value, setValue] = useState(true);
  const clickme = () => {
    console.log(value);
    setValue(!value);
  };
    console.log("results",results);
  
    const items = [...Array(results[0].length).keys()];
        const itemsPerPage = 5;
       
       const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
    //     // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

      const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
      }
  return(
    <>

<Box sx={{ flexGrow: 5, backgroundColor: "white", borderRadius: '10px', }} my={3}>
     <Accordion>
       <AccordionSummary>
         <Grid container p={2} display='flex' justifyContent='center'>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center' >
             <Box sx={{ width: '36px', height: '36px', border: '1px solid gray' }} >

             </Box>
             <Box px={1}>
               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>IndiGO</Typography>
               <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>6E 2431, 6E 909</Typography>
             </Box>
           </Grid>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
             <Box px={1}>
               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
             </Box>
           </Grid>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
             <Box px={1}>
               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>09h 15m</Typography>
               <Typography sx={{ fontSize: '10px', fontWeight: 'bold', color: '#707070' }}>1 Stop via Jaipur</Typography>
             </Box>
           </Grid>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
             <Box px={1}>
               <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>04:55</Typography>
               <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#707070' }}>New Delhi</Typography>
             </Box>
           </Grid>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
             <Box px={1}>
               <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#FF8900' }}>$3453</Typography>
             </Box>
           </Grid>
           <Grid md={2} display='flex' justifyContent='center' alignItems='center'>
             <Button variant="contained" onClick={clickme} sx={{ borderRadius: '30px', background: '#4260D8 0% 0% no-repeat padding-box' }} endIcon={<SendIcon />}>View Price</Button>
           </Grid>
           <Grid md={12} display='flex' justifyContent='right' alignItems='right'>
           <Typography sx={{ color: '#0AFF2B', fontSize: '14px', fontWeight: 'bold', }}>Use Travvolt and get Rs 299 instant discount</Typography>
           </Grid>

         </Grid>

       </AccordionSummary>
       <AccordionDetails>
         <Grid container display='flex' justifyContent='space-between' >
           <Viewflightdetails />
         </Grid>
         <Box className={(value) => value ? "active" : "inactive"}>
           <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
             <Viewpricebtn />
           </Grid>
           <Grid container px={2} py={1} display='flex' justifyContent='space-between'>
             <Viewsaver />
           </Grid>
           <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
             <Viewsupper />
           </Grid>
           <Grid container px={2} py={1} display='flex' justifyContent='space-between' >
             <Viewtravvolt />
           </Grid>
         </Box>
       </AccordionDetails>
     </Accordion>
   </Box>

    <Items currentItems={currentItems} />
         <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  )
}











































// const items = [...Array(33).keys()];

// function Items({ currentItems }) {
//   return (
//     <div className="items">
//     {currentItems && currentItems.map((item) => (
//       <div>
//         <h3>Item #{item}</h3>
//       </div>
//     ))}
//       </div>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage % items.length;
//     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// // Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById("container")
// );
