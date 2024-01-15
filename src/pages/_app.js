import HeaderFour from '@/Components/headers/headerFour'
import '@/styles/globals.css'
import { client } from '../../sanity/lib/client';
import { useState,useEffect } from 'react';
import { urlForImage } from '../../sanity/lib/image';
import FooterThree from '@/Components/footers/footerThree';


async function getData() {
  const query = `*[_type == "component"]{
        sections[0]
      }`;
  const data = await client.fetch(query);
  return data;
  
    }

    async function getFooterData() {
  const query = `*[_type == "component"]{
        sections[1]
      }`;
  const data = await client.fetch(query);
  return data;
  
    }

export default function App({ Component, pageProps }) {
  const [headerData, setHeaderData]=useState()
  const [footerData, setfooterData]=useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
       
        
        setHeaderData(result[0]?.sections);
        const logo = result[0]?.sections?.logo;

        if (logo) {
          setHeaderData((prevState) => ({
            ...prevState,
            logo: {
              src: urlForImage(logo.src),
            },
          
          }));
        }
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

    async function fetchFooterData() {
      try {
        const result = await getFooterData();
        result[0]?.sections.logo
        
        setfooterData(result[0]?.sections);
        const logo = result[0]?.sections?.logo;

        if (logo) {
          setfooterData((prevState) => ({
            ...prevState,
            logo: {
              src: urlForImage(logo.src),
            },
          
          }));
        }
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchFooterData();
  }, []);


 
  return (
    <>
   {headerData && <HeaderFour {...headerData}/>}
    <Component {...pageProps} />
    <FooterThree {...footerData}/>
    </>
    )
}
