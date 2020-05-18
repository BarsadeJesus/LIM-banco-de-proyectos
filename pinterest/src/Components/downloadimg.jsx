import React from "react";
import { Page, Image, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
  fontSize:15,
  padding:30
  },
  
  logo: {
    width:70,
    height:70
  }
});

const DownloadImg = ({dataImgDownload}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
      <View>
          <Image style= {styles.logo} src={dataImgDownload} />
          
        </View>
      </Page>
    </Document>
  );
};
export default DownloadImg;
