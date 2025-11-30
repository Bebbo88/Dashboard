import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import worldFeatures from "../world_countries.json";

const data = [
  {
    id: "AFG",
    value: 46110,
  },
  {
    id: "AGO",
    value: 265208,
  },
  {
    id: "ALB",
    value: 179707,
  },
  {
    id: "ARE",
    value: 342787,
  },
  {
    id: "ARG",
    value: 870548,
  },
  {
    id: "ARM",
    value: 938475,
  },
  {
    id: "ATA",
    value: 72809,
  },
  {
    id: "ATF",
    value: 454207,
  },
  {
    id: "AUT",
    value: 294447,
  },
  {
    id: "AZE",
    value: 664799,
  },
  {
    id: "BDI",
    value: 420282,
  },
  {
    id: "BEL",
    value: 260263,
  },
  {
    id: "BEN",
    value: 414517,
  },
  {
    id: "BFA",
    value: 353440,
  },
  {
    id: "BGD",
    value: 531025,
  },
  {
    id: "BGR",
    value: 461667,
  },
  {
    id: "BHS",
    value: 988029,
  },
  {
    id: "BIH",
    value: 856583,
  },
  {
    id: "BLR",
    value: 870963,
  },
  {
    id: "BLZ",
    value: 192175,
  },
  {
    id: "BOL",
    value: 897185,
  },
  {
    id: "BRN",
    value: 635490,
  },
  {
    id: "BTN",
    value: 290966,
  },
  {
    id: "BWA",
    value: 520956,
  },
  {
    id: "CAF",
    value: 490039,
  },
  {
    id: "CAN",
    value: 33890,
  },
  {
    id: "CHE",
    value: 308391,
  },
  {
    id: "CHL",
    value: 335049,
  },
  {
    id: "CHN",
    value: 420311,
  },
  {
    id: "CIV",
    value: 15899,
  },
  {
    id: "CMR",
    value: 251911,
  },
  {
    id: "COG",
    value: 405,
  },
  {
    id: "COL",
    value: 403547,
  },
  {
    id: "CRI",
    value: 402879,
  },
  {
    id: "CUB",
    value: 181384,
  },
  {
    id: "-99",
    value: 619423,
  },
  {
    id: "CYP",
    value: 577863,
  },
  {
    id: "CZE",
    value: 752283,
  },
  {
    id: "DEU",
    value: 933730,
  },
  {
    id: "DJI",
    value: 599991,
  },
  {
    id: "DNK",
    value: 100099,
  },
  {
    id: "DOM",
    value: 262186,
  },
  {
    id: "DZA",
    value: 94786,
  },
  {
    id: "ECU",
    value: 727546,
  },
  {
    id: "EGY",
    value: 255832,
  },
  {
    id: "ERI",
    value: 67180,
  },
  {
    id: "ESP",
    value: 698983,
  },
  {
    id: "EST",
    value: 348120,
  },
  {
    id: "ETH",
    value: 796326,
  },
  {
    id: "FIN",
    value: 868386,
  },
  {
    id: "FJI",
    value: 303359,
  },
  {
    id: "FLK",
    value: 666977,
  },
  {
    id: "FRA",
    value: 700403,
  },
  {
    id: "GAB",
    value: 986966,
  },
  {
    id: "GBR",
    value: 635880,
  },
  {
    id: "GEO",
    value: 603789,
  },
  {
    id: "GHA",
    value: 977571,
  },
  {
    id: "GIN",
    value: 435561,
  },
  {
    id: "GMB",
    value: 924167,
  },
  {
    id: "GNB",
    value: 518569,
  },
  {
    id: "GNQ",
    value: 102009,
  },
  {
    id: "GRC",
    value: 367599,
  },
  {
    id: "GTM",
    value: 998054,
  },
  {
    id: "GUY",
    value: 773813,
  },
  {
    id: "HND",
    value: 601454,
  },
  {
    id: "HRV",
    value: 486111,
  },
  {
    id: "HTI",
    value: 529020,
  },
  {
    id: "HUN",
    value: 119015,
  },
  {
    id: "IDN",
    value: 914675,
  },
  {
    id: "IND",
    value: 740382,
  },
  {
    id: "IRL",
    value: 944961,
  },
  {
    id: "IRN",
    value: 973382,
  },
  {
    id: "IRQ",
    value: 9373,
  },
  {
    id: "ISL",
    value: 412877,
  },
  {
    id: "ISR",
    value: 57853,
  },
  {
    id: "ITA",
    value: 775301,
  },
  {
    id: "JAM",
    value: 391000,
  },
  {
    id: "JOR",
    value: 862267,
  },
  {
    id: "JPN",
    value: 127267,
  },
  {
    id: "KAZ",
    value: 315304,
  },
  {
    id: "KEN",
    value: 837065,
  },
  {
    id: "KGZ",
    value: 128260,
  },
  {
    id: "KHM",
    value: 178723,
  },
  {
    id: "OSA",
    value: 747564,
  },
  {
    id: "KWT",
    value: 598099,
  },
  {
    id: "LAO",
    value: 818480,
  },
  {
    id: "LBN",
    value: 530607,
  },
  {
    id: "LBR",
    value: 299553,
  },
  {
    id: "LBY",
    value: 913299,
  },
  {
    id: "LKA",
    value: 140877,
  },
  {
    id: "LSO",
    value: 117257,
  },
  {
    id: "LTU",
    value: 244178,
  },
  {
    id: "LUX",
    value: 668476,
  },
  {
    id: "LVA",
    value: 721722,
  },
  {
    id: "MAR",
    value: 71781,
  },
  {
    id: "MDA",
    value: 241001,
  },
  {
    id: "MDG",
    value: 931862,
  },
  {
    id: "MEX",
    value: 937791,
  },
  {
    id: "MKD",
    value: 151157,
  },
  {
    id: "MLI",
    value: 636286,
  },
  {
    id: "MMR",
    value: 342873,
  },
  {
    id: "MNE",
    value: 787080,
  },
  {
    id: "MNG",
    value: 199344,
  },
  {
    id: "MOZ",
    value: 681895,
  },
  {
    id: "MRT",
    value: 226929,
  },
  {
    id: "MWI",
    value: 140586,
  },
  {
    id: "MYS",
    value: 859134,
  },
  {
    id: "NAM",
    value: 465534,
  },
  {
    id: "NCL",
    value: 633690,
  },
  {
    id: "NER",
    value: 88099,
  },
  {
    id: "NGA",
    value: 543493,
  },
  {
    id: "NIC",
    value: 574331,
  },
  {
    id: "NLD",
    value: 504569,
  },
  {
    id: "NOR",
    value: 205163,
  },
  {
    id: "NPL",
    value: 112650,
  },
  {
    id: "NZL",
    value: 329851,
  },
  {
    id: "OMN",
    value: 384017,
  },
  {
    id: "PAK",
    value: 966,
  },
  {
    id: "PAN",
    value: 721773,
  },
  {
    id: "PER",
    value: 899004,
  },
  {
    id: "PHL",
    value: 182541,
  },
  {
    id: "PNG",
    value: 927921,
  },
  {
    id: "POL",
    value: 282508,
  },
  {
    id: "PRI",
    value: 976760,
  },
  {
    id: "PRT",
    value: 834856,
  },
  {
    id: "PRY",
    value: 400886,
  },
  {
    id: "QAT",
    value: 766703,
  },
  {
    id: "ROU",
    value: 564025,
  },
  {
    id: "RUS",
    value: 975802,
  },
  {
    id: "RWA",
    value: 330940,
  },
  {
    id: "ESH",
    value: 101500,
  },
  {
    id: "SAU",
    value: 268842,
  },
  {
    id: "SDN",
    value: 326862,
  },
  {
    id: "SDS",
    value: 750159,
  },
  {
    id: "SEN",
    value: 718917,
  },
  {
    id: "SLB",
    value: 552267,
  },
  {
    id: "SLE",
    value: 883749,
  },
  {
    id: "SLV",
    value: 484654,
  },
  {
    id: "ABV",
    value: 341762,
  },
  {
    id: "SOM",
    value: 157863,
  },
  {
    id: "SRB",
    value: 507621,
  },
  {
    id: "SUR",
    value: 249228,
  },
  {
    id: "SVK",
    value: 76834,
  },
  {
    id: "SVN",
    value: 271686,
  },
  {
    id: "SWZ",
    value: 183593,
  },
  {
    id: "SYR",
    value: 547940,
  },
  {
    id: "TCD",
    value: 450332,
  },
  {
    id: "TGO",
    value: 123387,
  },
  {
    id: "THA",
    value: 942056,
  },
  {
    id: "TJK",
    value: 915043,
  },
  {
    id: "TKM",
    value: 908795,
  },
  {
    id: "TLS",
    value: 43900,
  },
  {
    id: "TTO",
    value: 684876,
  },
  {
    id: "TUN",
    value: 901177,
  },
  {
    id: "TUR",
    value: 349549,
  },
  {
    id: "TWN",
    value: 509464,
  },
  {
    id: "TZA",
    value: 442412,
  },
  {
    id: "UGA",
    value: 984614,
  },
  {
    id: "UKR",
    value: 841155,
  },
  {
    id: "URY",
    value: 279332,
  },
  {
    id: "USA",
    value: 640083,
  },
  {
    id: "UZB",
    value: 449092,
  },
  {
    id: "VEN",
    value: 978033,
  },
  {
    id: "VNM",
    value: 846747,
  },
  {
    id: "VUT",
    value: 364173,
  },
  {
    id: "PSE",
    value: 59768,
  },
  {
    id: "YEM",
    value: 842831,
  },
  {
    id: "ZAF",
    value: 156462,
  },
  {
    id: "ZMB",
    value: 751556,
  },
  {
    id: "ZWE",
    value: 340141,
  },
  {
    id: "KOR",
    value: 723812,
  },
];

export default function Geography({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <div
      style={{
        height: isDashboard ? "380px" : "80vh",
        border: isDashboard ? null : "1px solid ",
        borderRadius: "3px",
      }}
    >
      <ResponsiveChoropleth
        data={data}
        features={worldFeatures.features}
        colors={[
          "#7b002c", // deep red
          "#d21f3c", // red
          "#ff6633", // orange
          "#ffcc66", // light orange
          "#c7e9b4", // light green
          "#7fcdbb", // teal
          "#41b6c4", // blue
          "#225ea8", // deep blue
        ]}
        domain={[0, 1000000]}
        unknownColor="#3a3a3a"
        enableGraticule={false}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        label="properties.name"
        valueFormat=">-.1f"
        projectionScale={150}
        projectionTranslation={[0.5, 0.55]}
        borderColor={theme.palette.mode === "dark" ? "#ffffff33" : "#00000055"}
        borderWidth={0.6}
        theme={{
          background: "transparent",
          textColor: theme.palette.text.primary,
          fontSize: 12,
          axis: {
            domain: { line: { stroke: "none" } },
            ticks: { line: { stroke: "none" } },
          },
          grid: { line: { stroke: "none" } },
          legends: { text: { fill: theme.palette.text.primary } },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: "4px",
              boxShadow: theme.shadows[3],
            },
          },
        }}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  translateX: 20,
                  translateY: -80,
                  itemWidth: 94,
                  itemHeight: 18,
                  symbolSize: 16,
                  /** لون النص في الليجند */
                  itemTextColor: theme.palette.text.primary,
                },
              ]
        }
      />
    </div>
  );
}
