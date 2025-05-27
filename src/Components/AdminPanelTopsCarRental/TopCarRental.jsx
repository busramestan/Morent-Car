"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import styles from "./TopCarRental.module.scss";

const TopCarRental = () => {
    const chartRef = useRef(null);

    const rentalData = [
        { value: 17439, name: "Sport Car", color: "#083D77" },
        { value: 9478, name: "SUV", color: "#2A94D6" },
        { value: 18197, name: "Coupe", color: "#75B9E7" },
        { value: 12510, name: "Hatchback", color: "#D6E8FA" },
        { value: 14406, name: "MPV", color: "#A4D4F4" },
    ];

    const totalRentals = rentalData.reduce((sum, item) => sum + item.value, 0);

    const formatNumber = (number) => {
        return number.toLocaleString("en-US");
    };

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);

        const option = {
            tooltip: {
                trigger: "item",
                confine: true,
                backgroundColor: "rgba(50, 50, 50, 0.7)",
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                },
                position: function (point) {
                    const [x, y] = point;
                    const tooltipX = x + 10;
                    const tooltipY = y;
                    return [tooltipX, tooltipY];
                },
            },
            graphic: [
                {
                    type: "text",
                    left: "center",
                    top: "center",
                    style: {
                        text: `${totalRentals.toLocaleString()}\nRental Cars`,
                        fontWeight: "bold",
                        fontSize: "clamp(14px, 18px, 24px)",
                        fill: "#000",
                        textAlign: "center",
                    },
                },
            ],
            series: [
                {
                    name: "Rental Car",
                    type: "pie",
                    radius: ["75%", "90%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: "#fff",
                        borderWidth: 2,
                    },
                    label: {
                        show: false,
                    },
                    emphasis: {
                        label: {
                            show: false,
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: rentalData.map((item) => ({
                        value: item.value,
                        name: item.name,
                        itemStyle: { color: item.color },
                    })),
                },
            ],
            backgroundColor: "transparent",
        };

        chartInstance.setOption(option);

        const handleResize = () => {
            chartInstance.resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            chartInstance.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, [rentalData]);

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Top 5 Car Rental</h2>
            <div className={styles.content}>
                <div ref={chartRef} className={styles.chart}>
                    <div className={styles.chartText}>
                        <span className={styles.total}>{formatNumber(totalRentals)}</span>
                        <span className={styles.subtitle}>Rental Cars</span>
                    </div>
                </div>
                <div className={styles.legend}>
                    {rentalData.map((item) => (
                        <div key={item.name} className={styles.legendItem}>
                            <div className={styles.legendRow}>
                                <span
                                    className={styles.colorBox}
                                    style={{ backgroundColor: item.color }}
                                ></span>
                                <span className={styles.legendText}>{item.name}</span>
                            </div>
                            <span className={styles.value}>{formatNumber(item.value)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCarRental;
