import {Header} from './Header'
import { SearchBar } from './SearchBar'
import { SubHeader } from './SubHeader'
import { User } from './User'

export default function Dashboard () {
    return <div>
        <Header label = {"Payments App"} data = {"Hello, User"} logo = {"U"} />
        <SubHeader label = "Your Balance" data = "$5000" />
        <SubHeader label = "Users"/>
        <SearchBar placeholder={"Search users..."} />
        <User data={"User 1"} logo = {"U"}/>
        <User data={"User 2"} logo = {"U"}/>
        <User data={"User 3"} logo = {"U"}/>
        <User data={"User 4"} logo = {"U"}/>
    </div>
}