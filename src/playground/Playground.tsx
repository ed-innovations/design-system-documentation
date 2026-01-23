import {CardLg, Login, Notification} from '../components'

export function Playground() {
    return (
        <div className={"playground"}>
            {/*<Login />*/}

            {/*<Notification*/}
            {/*    icon="/icons/bell.svg"*/}
            {/*    title="New request"*/}
            {/*    description="You have received a new access request."*/}
            {/*    onAccept={() => alert('Accepted')}*/}
            {/*    onDecline={() => alert('Declined')}*/}
            {/*/>*/}

            <div className="card-lg-wrapper">
                <CardLg />
            </div>

        </div>
    )
}
