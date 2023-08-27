import { useLoaderData } from "react-router";
import Container from "../components/Container";
import WIPMessage from "../components/WIPMessage";
import { Project } from "../services/Projects";
import TitledCard from "../components/TitledCard";
import IconedTitle from "../components/IconedTitle";


const Projects = () => {

    const projects = useLoaderData() as Array<Project>;
    
    const getProjecDuration = (project: Project) => {
        if (!project.startDate)
            return ''
        else if (!project.endDate)
            return `${project.startDate} - Present`
        else
            return `${project.startDate} - ${project.endDate}`
    }

    return (
        <Container>
            <div className='col-span-2'></div>
            <div className="flex flex-col col-span-6 gap-6">
                {
                    projects.length ? projects.map(project => (
                        <TitledCard
                            className='pb-3'
                            title={project.name}
                            key={project.id}
                        >
                            <div className="px-2 py-5 mb-5 rounded-xl bg-zinc-100 dark:bg-zinc-900">
                                <p>{project.description}</p>
                            </div>
                            <div className="flex justify-between mb-5 max-sm:flex-col">
                                <div className="flex gap-5">
                                    <IconedTitle
                                        text='Link'
                                        href={project.link}
                                        icon="link"
                                        iconClassName="w-5 h-5 mr-3"
                                        textClassName="text-md"
                                        className="mb-0"
                                    />
                                    {
                                        project.githubLink && (
                                            <>                                            
                                                <div className="w-0.5 h-5 bg-slate-200"/>
                                                <IconedTitle
                                                    text='Repo'
                                                    href={project.githubLink}
                                                    icon="github"
                                                    iconClassName="w-5 h-5 mr-3"
                                                    textClassName="text-md"
                                                    className="mb-0"
                                                    />
                                            </>
                                        )
                                    }
                                </div>
                                {
                                    getProjecDuration(project).length &&
                                    <IconedTitle
                                        text={getProjecDuration(project)}
                                        icon="calendar"
                                        iconClassName="w-5 h-5 mr-3"
                                        textClassName="text-md"
                                        className="mb-0"
                                    />
                                }
                            </div>
                            <div className="flex justify-between mb-5 max-sm:flex-col">
                                <p>{`Category: ${project.type}`}</p>
                                <div className="flex gap-2">
                                    {
                                        project.stack.map(item => (
                                            <p>{item.name}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <h2 className="mb-2 text-2xl">Key points</h2>
                            <ul className="pb-4 pl-4 border-l-2 border-zinc-300">
                                {
                                    project.keyPoints.map(keyPoint => (
                                        <li>
                                            <div className="relative w-3.5 h-3.5 bg-gray-200 border border-white rounded-full right-6 top-5 dark:border-gray-900 dark:bg-zinc-300"></div>
                                            <p>{keyPoint}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </TitledCard>
                    )) : (
                        <WIPMessage
                            icon='not-found'
                            text="No projects yet"
                        />
                    )
                }
            </div>
            <div className='col-span-2'></div>
        </Container>
    );
}

export default Projects;
