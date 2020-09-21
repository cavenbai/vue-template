import service from '@/utils/http'

export function coursesList(data:any) {
    return service({
        url: `/api/edu/course/v1/courses`,
        method: 'post',
        data: data,
        // headers:{loading:true}
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