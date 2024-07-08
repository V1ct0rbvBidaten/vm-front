import { ArrowDownTrayIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Button, ButtonGroup } from "@nextui-org/react";
import { LineChart } from "@tremor/react";

const BalanceHome = () => {
  const chartdata = [
    {
      date: "Jan 23",
      ingresos: 68652,
    },
    {
      date: "Feb 23",
      ingresos: 72652,
    },
    {
      date: "Mar 23",
      ingresos: 82652,
    },
    {
      date: "Apr 23",
      ingresos: 84652,
    },
    {
      date: "May 23",
      ingresos: 94652,
    },
    {
      date: "Jun 23",
      ingresos: 114652,
    },
    {
      date: "Jul 23",
      ingresos: 141222,
    },
    {
      date: "Aug 23",
      ingresos: 191132,
    },
    {
      date: "Sep 23",
      ingresos: 231132,
    },
    {
      date: "Oct 23",
      ingresos: 301132,
    },
    {
      date: "Nov 23",
      ingresos: 314232,
    },
    {
      date: "Dec 23",
      ingresos: 324435,
    },
  ];

  const valueFormatter = function (number) {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Pagos y comisiones</h1>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col p-2 border-1 mt-5  rounded-md">
          <div className="flex justify-between">
            <h2 className="font-semibold text-3xl">Balance de la cuenta </h2>
            <ButtonGroup size="sm">
              <Button
                className="bg-slate-100 "
                startContent={<PencilSquareIcon className="h-4" />}
              >
                Actualizar mis datos
              </Button>
              <Button
                className="bg-sky-700 text-white"
                startContent={<ArrowDownTrayIcon className="h-4" />}
              >
                Descargar historial movimientos
              </Button>
            </ButtonGroup>
          </div>
          <span className="text-5xl mt-8">
            $324.435{" "}
            <span className="border-2 border-emerald-200 pr-4 pl-4 rounded-md text-sm bg-emerald-50 text-emerald-500">
              +4.4%
            </span>
          </span>
          <LineChart
            className="mt-4 h-72"
            data={chartdata}
            index="date"
            yAxisWidth={65}
            categories={["ingresos"]}
            colors={["indigo"]}
            valueFormatter={valueFormatter}
            xAxisLabel="Month of Year"
            yAxisLabel="Revenue (USD)"
          />
        </div>
      </div>
    </>
  );
};

export default BalanceHome;
