import React from 'react'
import ReactScroll from 'react-scroll'
import { ReactComponent as LogInActive } from 'assets/img/icons/log-in-active.svg'
import { ReactComponent as LogIn } from 'assets/img/icons/log-in.svg'
import { ReactComponent as UserActive } from 'assets/img/icons/user-active.svg'
import { ReactComponent as User } from 'assets/img/icons/user.svg'
import { ReactComponent as TapActive } from 'assets/img/icons/tap-active.svg'
import { ReactComponent as Tap } from 'assets/img/icons/tap.svg'
import { ReactComponent as GiveWomensRights } from 'assets/img/icons/give-womens-rights.svg'
import { ReactComponent as Pay } from 'assets/img/icons/pay.svg'

export default function OnboardingMainHowItWorks(props) {
  return (
    <div className="main-page__how-it" id="how-it-works">
      <ReactScroll.Element name="how-it-works">
        <h2 className="center">
          How it <span className="sub-text">works</span>
        </h2>
      </ReactScroll.Element>
      <table className="table">
        <thead>
          <tr>
            <td></td>
            <td>
              <span className="table__text">Model</span>
            </td>
            <td></td>
            <td>
              <span className="table__text">Booker</span>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <LogInActive />{' '}
              <span className="dash">
                <i />
              </span>
            </td>
            <td>
              <span className="table__text">Register account</span>
            </td>
            <td></td>
            <td>
              <span className="table__text">Register account</span>
            </td>
            <td>
              <span className="dash">
                <i />
              </span>{' '}
              <LogIn />
            </td>
          </tr>

          <tr>
            <td>
              <UserActive />{' '}
              <span className="dash">
                <i />
              </span>
            </td>
            <td>
              <span className="table__text">Build your profile</span>
            </td>
            <td></td>
            <td>
              <span className="table__text">Build your profile</span>
            </td>
            <td>
              <span className="dash">
                <i />
              </span>{' '}
              <User />
            </td>
          </tr>

          <tr>
            <td>
              <TapActive />{' '}
              <span className="dash">
                <i />
              </span>
            </td>
            <td>
              <span className="table__text">Apply for jobs</span>
            </td>
            <td></td>
            <td>
              <span className="table__text">Create jobs</span>
            </td>
            <td>
              <span className="dash">
                <i />
              </span>{' '}
              <Tap />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <span className="table__text">Get hired</span>
            </td>
            <td>
              <span className="dash" /> <GiveWomensRights />{' '}
              <span className="dash" />
            </td>
            <td>
              <span className="table__text">Hire</span>
            </td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <span className="table__text">Get paid</span>
            </td>
            <td>
              <span className="dash" /> <Pay /> <span className="dash" />
            </td>
            <td>
              <span className="table__text">Pay</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
