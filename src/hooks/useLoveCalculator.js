import React from "react";

const useLoveCalculator = async (fname, sname) => {
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a93d74b2bemshfa679349444da06p1d6893jsna4d5831e5bde",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
};

export default useLoveCalculator;
