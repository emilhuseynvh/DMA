import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicPage from "../layout/PublicPage";
import Home from "../pages/Home";
import Test from "../pages/Test";
import WorkMeans from "../pages/WorkMeans";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Result from "../pages/Result";
import Evaulate from "../pages/Evaulate";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PublicPage />}>
            <Route index path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="workmeans" element={<WorkMeans />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/result" element={<Result />} />
            <Route path="/evaluate" element={<Evaulate />} />
        </Route>
    )
)