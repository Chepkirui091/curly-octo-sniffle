import DetailedTaskPage from "@/components/page-components/tasks/detailed-tasks";
import ModernLayout from "@/components/@layout";

const MyTask = () => {
    return (
        <>

        <ModernLayout>
            <div className="lg:m-12">
                <DetailedTaskPage/>
            </div>
        </ModernLayout>

</>
    )
}

export default MyTask