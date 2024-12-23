import {apiGetListCampaign} from '../../../../services';

Component({
    data: {
        status: 'LOADING',
        campaigns: [],
    },
    async didMount() {
        try {
            const res = await apiGetListCampaign();
            this.setData({
                ...this.data,
                campaigns: res.data,
            });
        } catch (err) {
            this.setData({
                ...this.data,
                status: 'FAILED',
            });
        }
    },
});
