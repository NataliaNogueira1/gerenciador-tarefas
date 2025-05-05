import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-full mx-auto space-y-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="text-slate-100 !bg-slate-500">
            <ChevronLeftIcon />
          </button>
          <div className="flex-1 text-center">
            <Title>Detalhes da Tarefa</Title>
          </div>
          <div className="w-6" />
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;