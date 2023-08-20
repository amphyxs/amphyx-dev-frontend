import IconedTitle from "../components/IconedTitle";


const Books = () => {
    return (
        <div className="h-screen p-20 bg-slate-50 dark:bg-zinc-900">
            <div className="flex justify-center ">
                <IconedTitle
                    icon='wip'
                    text='Work in progress'
                    textClassName='ml-5 text-5xl dark:text-slate-200'
                    iconClassName='w-10 h-10'
                />
            </div>
        </div>
    );
}

export default Books;
