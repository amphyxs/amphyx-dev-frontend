import IconedTitle from "../components/IconedTitle";

const NotFound = () => {
    return (
        <div className="h-screen p-20 bg-slate-50 dark:bg-zinc-900">
            <div className="flex justify-center ">
                <IconedTitle
                    icon='not-found'
                    text='Not found'
                    textClassName='ml-5 text-5xl dark:text-slate-200'
                    iconClassName='w-10 h-10 dark:fill-slate-200 fill-slate-600 dark:text-slate-200 text-slate-600'
                />
            </div>
        </div>
    )
}

export default NotFound;
