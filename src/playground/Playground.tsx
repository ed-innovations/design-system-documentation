import {CardLg, Login, Notification, Listing, Upload, Signup, TextInput, HeaderBanner, CardCTA} from '../components'

export function Playground() {
    return (
        <div className={"playground"}>
            {/*<Login />*/}

            {/*<Signup />*/}

            {/*<Notification*/}
            {/*    icon="/icons/bell.svg"*/}
            {/*    title="New request"*/}
            {/*    description="You have received a new access request."*/}
            {/*    onAccept={() => alert('Accepted')}*/}
            {/*    onDecline={() => alert('Declined')}*/}
            {/*/>*/}

            <TextInput
                onChange={(value) => console.log(value)}
                onSubmit={() => console.log('submitted')}
            />

            {/*<div className="card-lg-wrapper">*/}
            {/*    <CardLg />*/}
            {/*</div>*/}

            {/*<Listing />*/}

            {/*<Upload />*/}

            {/*<HeaderBanner />*/}

            {/*<CardCTA/>*/}
        </div>
    )
}
