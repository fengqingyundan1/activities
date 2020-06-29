import service from '_utils/service';

// hot catd
export function getHomeData(data) {
    return service({
        url: '/index.php/sg/H5activity/geth5activityproducts',
        method: 'post',
        data: data
    });
}

