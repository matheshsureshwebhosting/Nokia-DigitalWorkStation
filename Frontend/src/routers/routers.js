import Home from "../Components/Home/Home";
import Sliders from "../Components/Sliders/Sliders";
import SolderForm from "../Components/Soldering/SolderForm";
import Solderings from "../Components/Soldering/Solderings";
import Step1 from "../Components/Steps/Step1";
import Step2 from "../Components/Steps/Step2";
import Step3 from "../Components/Steps/Step3";
import Step4 from "../Components/Steps/Step4";
import Step5 from "../Components/Steps/Step5";
import Step6 from "../Components/Steps/Step6";
import Step7 from "../Components/Steps/Step7";
import Step8 from "../Components/Steps/Step8";
import Step9 from "../Components/Steps/Step9";
import VacuumForm from "../Components/Steps/VacuumForm";
import VaccumeTable from "../Components/Tables/ReportTable/VaccumeTable";
import { Ota, Ota10, Ota2, Ota3, Ota4, Ota5, Ota6, Ota7, Ota8, Ota9 } from "../Components/Testers/OtaTester/Ota";
import OtaForm from "../Components/Testers/OtaTester/OtaForm";
import Testerform from "../Components/Testers/Testerform";
// import { Thermal, Thermal10, Thermal11, Thermal12, Thermal13, Thermal2, Thermal3, Thermal4, Thermal5, Thermal6, Thermal7, Thermal8, Thermal9 } from "../Components/Testers/ThermalGelTester/Thermal";
// import { Thermalform } from "../Components/Testers/ThermalGelTester/Thermalform";
import Thermalmain from "../Components/Testers/ThermalGelTester/Thermalmain";
import { Uwa, Uwa10, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9 } from "../Components/Testers/UwaTester/Uwa";
import UwaForm from "../Components/Testers/UwaTester/UwaForm";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EngineersDashboard from "../Pages/Dashboard/EngineersDashboard";
import OperatorsDashboard from "../Pages/Dashboard/OperatorsDashboard";
import QualityDashboard from "../Pages/Dashboard/QualityDashboard";
import SuperuserDashboard from "../Pages/Dashboard/SuperuserDashboard";
import TeamLeaderDashboard from "../Pages/Dashboard/TeamLeaderDashboard";
import TechniciansDashboard from "../Pages/Dashboard/TechniciansDashboard";
import Error from "../Pages/ErrorPage/Error";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Testers from "../Pages/TestersMainPage/Testers";
import Pvaform from "../Components/Testers/ThermalGelTester/Pva/Pvaform"
import { Pva, Pva2, Pva3, Pva4, Pva5, Pva6, Pva7, Pva8, Pva9, Pva10, Pva11, Pva12, Pva13 } from '../Components/Testers/ThermalGelTester/Pva/Pva';
export const routers = [
    {
        path: "/",
        component: Home,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/login",
        component: LoginPage,
        isprivate: false,
        roles: ["Tester"]
    },
    {
        path: "/Dashboard",
        component: Dashboard,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/sliders",
        component: Sliders,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Soldering",
        component: Solderings,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/SolderForm",
        component: SolderForm,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/VacuumForm",
        component: VacuumForm,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step1",
        component: Step1,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step2",
        component: Step2,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step3",
        component: Step3,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step4",
        component: Step4,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step5",
        component: Step5,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step6",
        component: Step6,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step7",
        component: Step7,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step8",
        component: Step8,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Step9",
        component: Step9,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/vaccume",
        component: VaccumeTable,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/testerform",
        component: Testerform,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Testers",
        component: Testers,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/otaform",
        component: OtaForm,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/OTA",
        component: Ota,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota2",
        component: Ota2,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota3",
        component: Ota3,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota4",
        component: Ota4,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota5",
        component: Ota5,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota6",
        component: Ota6,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota7",
        component: Ota7,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota8",
        component: Ota8,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota9",
        component: Ota9,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Ota10",
        component: Ota10,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/uwaform",
        component: UwaForm,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/UWA",
        component: Uwa,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa2",
        component: Uwa2,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa3",
        component: Uwa3,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa4",
        component: Uwa4,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa5",
        component: Uwa5,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa6",
        component: Uwa6,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa7",
        component: Uwa7,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa8",
        component: Uwa8,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa9",
        component: Uwa9,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Uwa10",
        component: Uwa10,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/Pvaform",
        component: Pvaform,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva",
        component: Pva,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step2",
        component: Pva2,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step3",
        component: Pva3,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step4",
        component: Pva4,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step5",
        component: Pva5,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step6",
        component: Pva6,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step7",
        component: Pva7,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step8",
        component: Pva8,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step9",
        component: Pva9,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step10",
        component: Pva10,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step11",
        component: Pva11,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step12",
        component: Pva12,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/pva/step13",
        component: Pva13,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/thermalmain",
        component: Thermalmain,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/superuser",
        component: SuperuserDashboard,
        isprivate: true,
        roles: ["Tester"]
    },
    {
        path: "/quality",
        component: QualityDashboard,
        isprivate: true,
        roles: ["Tester"]
    }
    ,
    {
        path: "/teamleader",
        component: TeamLeaderDashboard,
        isprivate: true,
        roles: ["Tester"]
    }
    ,
    {
        path: "/engineer",
        component: EngineersDashboard,
        isprivate: true,
        roles: ["Tester"]
    }
    ,
    {
        path: "/technician",
        component: TechniciansDashboard,
        isprivate: true,
        roles: ["Tester"]
    }
    ,
    {
        path: "/operator",
        component: OperatorsDashboard,
        isprivate: true,
        roles: ["Tester"]
    }
    ,
    {
        path: "/*",
        component: Error,
        isprivate: true,
        roles: ["Tester"]
    }
]