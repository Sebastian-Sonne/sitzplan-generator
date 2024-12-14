import AddStudentsScreen from "./components/addStudentsScreen/AddStudentsScreen";
import CreateClassroomScreen from "./components/createClassroomScreen/CreateClassroomScreen";
import AssignSeatsScreen from "./components/assignSeatsScreen/AssignSeatsScreen";
import Progressbar from "./components/Progressbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { ProcessSteps, setProcessStep } from "./state/slices/appSlice";
import { Footer } from "./components/footer/Footer";
import { useEffect } from "react";

const App = () => {
  const step = useSelector((state: RootState) => state.app.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    //@ts-ignore
    dispatch(setProcessStep(params.get('step') || 1))
  }, [])

  return (
    <>
      <div className="w-full max-w-4xl mx-auto mb-4 p-4 bg-gray-50 mt-5 rounded-3xl shadow-md">
        <Progressbar />

        {step === ProcessSteps.STEP_ONE && (
          <AddStudentsScreen />
        )}

        {step === ProcessSteps.STEP_TWO && (
          <CreateClassroomScreen />
        )}

        {step === ProcessSteps.STEP_THREE && (
          <AssignSeatsScreen />
        )}
      </div>

      <Footer />
    </>
  );
};

export default App;
