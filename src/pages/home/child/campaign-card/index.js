import {navigateTo} from '../../../../helper';

Component({
    props: {
        status: 'LOADING',
        item: {},
    },
    methods: {
        handleSelect() {
            navigateTo('web-view-page');
        },
        handleFollowCampaign() {
            console.log('Hello user');
        },
    },
});
