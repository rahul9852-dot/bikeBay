import {BASE_URL} from "@env";
import { Alert } from "react-native";
export const sendSmsVerification = async (phoneNumber) => {
    try {
      const data = JSON.stringify({
        to: phoneNumber,
        channel: "sms",
      });
      console.log("BaseUrl", BASE_URL)
   
      const response = await fetch(`${BASE_URL}/start-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
   
      const json = await response;
      return json.success;
    } catch (error) {
        Alert.alert(error);
      console.error(error);
      return false;
    }
   };
   
   export const checkVerification = async (phoneNumber, code) => {
    try {
      const data = JSON.stringify({
        to: phoneNumber,
        code,
      });
   
      const response = await fetch(`${BASE_URL}/check-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
   
      const json = await response.json();
      return json.success;
    } catch (error) {
      console.error(error);
      return false;
    }
   };
   
   module.exports = {
    sendSmsVerification,
    checkVerification,
   };