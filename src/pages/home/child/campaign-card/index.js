import { navigateTo } from "../../../../helper";

Component({
    props: {
        status: "LOADING",
        campaign: {},
    },
    methods: {
        handleSelect() {
            navigateTo("web-view-page");
        },
        handleFollowCampaign() {
            console.log("Hello user");
        },
    },
});
