import axios from "axios";
import { API_URL } from "./Common";


export enum ProjectType {
    language = 'language',
    framework = 'framework',
    library = 'library',
    deployment = 'deployment',
    other = 'other',
}

export type ProjectTool = {
    'name': string,
    'type': string,
}

export type ProjectResponse = {
    'id': number,
    'name': string,
    'description': string,
    'link': string,
    'github_link': string,
    'stack': Array<ProjectTool>,
    'type': string,
    'start_date': string,
    'end_date': string,
    'key_points': Array<string>,
}

export type Project = {
    'id': number,
    'name': string,
    'description': string,
    'link': string,
    'githubLink': string,
    'stack': Array<ProjectTool>,
    'type': ProjectType,
    'startDate': string,
    'endDate': string,
    'keyPoints': Array<string>,
}

export const getProjects = async () => {
    const response = await (
        axios
        .get(`${API_URL}/api/projects/`)
        .catch((error: Error) => console.error(error.message))
    );
    return response ? convertResponseToProjects(response.data as Array<ProjectResponse>) : null;
}

const convertResponseToProjects = (responseData: Array<ProjectResponse>) => {
    return responseData.map(responseProject => 
        Object.create({
            'id': responseProject.id,
            'name': responseProject.name,
            'description': responseProject.description,
            'link': responseProject.link,
            'githubLink': responseProject.github_link,
            'stack': responseProject.stack,
            'type': responseProject.type,
            'startDate': responseProject.start_date,
            'endDate': responseProject.end_date,
            'keyPoints': responseProject.key_points,
        }) as Project
    )
}
