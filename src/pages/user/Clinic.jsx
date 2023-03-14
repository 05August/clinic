import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setIsPerLoading } from "redux/global.slice";
import clientServer from "server/clientServer";

const Clinic = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setIsPerLoading(true));
        const getResponseClinic = await clientServer.get(
          `clinicList?search=${searchParams.get("keyword" || "")}`
        );
        console.log(
          "🚀 ~ file: Clinic.jsx:18 ~ fetchData ~ searchParams.get(:",
          searchParams.get("keyword" || "")
        );
        console.log(
          "🚀 ~ file: Clinic.jsx:20 ~ fetchData ~ getResponseClinic:",
          getResponseClinic.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setIsPerLoading(false));
      }
    }
    fetchData();
  }, [searchParams.get("keyword" || "")]);
  return <></>;
};

export default Clinic;
