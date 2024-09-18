import { API_URL } from '@/5_shared/consts/app.consts'
import { IssueExpandedSchema, RewardExpandedSchema } from '@/5_shared/gen'

class IssueApi {

    private IssueApi = ['IssueApi']

    async getIssueData(issueId: string) {
        const resp = await fetch(
            `${API_URL}/api/issues/${issueId}`,
            {
                next: {
                    tags: ['Issue']
                },
                cache: 'no-cache'
            }
        )
        const data: IssueExpandedSchema = await resp.json()
        return data
    }

    async getAllIssueRewards(issueId: string) {
        const resp = await fetch(
            `${API_URL}/api/rewards/?issue_id=${issueId}&skip=0&limit=100`,
            {
                next: {
                    tags: ['IssueRewardss']
                },
                cache: 'no-cache'
            }
        )
        const data: RewardExpandedSchema[] = await resp.json()
        return data
    }

}

const issueApi = new IssueApi()

export { issueApi }