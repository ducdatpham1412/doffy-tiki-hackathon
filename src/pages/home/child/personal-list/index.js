import {apiGetListPersonalReview} from '../../../../services';

Component({
    data: {
        status: 'LOADING',
        listReviews: [],
    },
    async didMount() {
        try {
            const res = await apiGetListPersonalReview();
            this.setData({
                ...this.data,
                status: 'SUCCESS',
                listReviews: res.data,
            });
        } catch (err) {
            this.setData({
                ...this.data,
                status: 'FAILED',
            });
        }
    },
});
