import service from '@/utils/http'

export function addMemberForExcel(data: object) {
    return service({
        url: '/api/edu/member/v1/members/excels',
        method: 'post',
        data: data
    })
}
  
export function getInfo(val: string | number) {
    return service({
        url: `/api/edu/uc/v1/users`,
        method: 'get',
        params: {
            search: val
        }
    })
}