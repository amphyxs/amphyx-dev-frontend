import { ReactNode } from "react";

type Props = {
    children: ReactNode,
}

const Container = ({ children }: Props) => {
    return (
        <div className={'grid grid-cols-10 lg:gap-3 xl:gap-5 2xl:gap-10 max-lg:flex max-lg:flex-col min-h-screen py-12 bg-slate-50 dark:bg-zinc-900 lg:px-3 xl:px-4 2xl:px-16 max-lg:px-20 max-sm:px-5 max-sm:py-5'}>
            {children}
        </div>
    );
}

export default Container;
