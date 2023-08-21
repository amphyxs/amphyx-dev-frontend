import IconedTitle from "./IconedTitle";


const WIPMessage = () => (
    <div className="flex justify-center col-span-10 row-span-1 max-h-20">
        <IconedTitle
            icon='wip'
            text='Work in progress'
            textClassName='ml-5 text-5xl dark:text-slate-200 self-center'
            iconClassName='w-10 h-10'
        />
    </div>
)

export default WIPMessage;
