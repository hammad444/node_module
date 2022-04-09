import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
   userRegisterReducer,
   userLoginReducer,
   userReducer,
   allUsersReducer,
   UserDeleteReducer,
   UserUpdateReducer,
   userPictureReducer,
   payAccountReducer,
   allPayAccountsReducer
   } from './reducers/userReducer'

   import {
    paymentReducer,
    allPaymentsReducer,
    PaymentDeleteReducer,
    PaymentUpdateReducer,
    GetPaymentReducer
    } from './reducers/paymentReducer'

    import {
      PackageCreateReducer,
      allPackagesReducer,
      PackageDeleteReducer,
      PackageUpdateReducer,
      GetPackageReducer,
      pkgReducer
      } from './reducers/packageReducer'


      import {
        statutesDataReducer,
        casesDataReducer,
        legaltermsDataReducer,
        topicsDataReducer,
        articlesDataReducer,
        dictionaryDataReducer,
        } from './reducers/uploadReducer'

      import {
        journalReducer,
        citationIdsReducer,
        CaseReducer,
        allCasesReducer,
        caseDescReducer,
        refCaseReducer,
        CitationReducer,
        allCitationDataReducer,
        ordinanceDataReducer,
        allStatutesReducer,
        statuteReadReducer,
        } from './reducers/dataReducer'
    
        import {
         searchCaseReducer,
         searchIndexReducer,
         searchCitationReducer,
         searchCourtReducer,
         searchAdvanceReducer,
          } from './reducers/searchReducer'
      
       import {
         setBookmarkReducer,
         getBookmarkReducer,
         deleteBookmarkReducer,
         getDictionaryReducer,
         getLegaltermReducer,
         getArticlesReducer,
         getTopicsReducer,
         getTopicStatuteReducer
        } from "./reducers/otherDataReducer"

        import {
          OtpCodeReducer,
          mailReducer
         } from "./reducers/otpReducer"


         import {
          allClientsCasesReducer,
           allClientsReducer,
           clientReducer,
           ClientCreateReducer,
           ClientUpdateReducer,
           allClientCasesReducer,
           caseReducer,
           CaseCreateReducer,
           CaseUpdateReducer,
           CaseFilesReducer,

           CaseReadIdsReducer
          } from "./reducers/dairyReducer"

const reducer = combineReducers({

registerUser:userRegisterReducer,
user:userReducer,
allUsers:allUsersReducer,
loginUser:userLoginReducer,
userDelete:UserDeleteReducer,
userUpdate:UserUpdateReducer,
userPicture:userPictureReducer,
payAccount:payAccountReducer,
payAccounts:allPayAccountsReducer,

paymentUser:paymentReducer,
paymentsAllUsers:allPaymentsReducer,
paymentDelete:PaymentDeleteReducer,
paymentUpdate:PaymentUpdateReducer,
getPayment:GetPaymentReducer,

packageUser:pkgReducer,
packageCreate:PackageCreateReducer,
allPackages:allPackagesReducer,
packageDelete:PackageDeleteReducer,
packageUpdate:PackageUpdateReducer,
getPackage:GetPackageReducer,


statutesData:statutesDataReducer,
casesData:casesDataReducer,
legaltermsData:legaltermsDataReducer,
articlesData:articlesDataReducer,
topicsData:topicsDataReducer,
dictionaryData:dictionaryDataReducer,

journalList:journalReducer,
citationIds:citationIdsReducer,

caseOne:CaseReducer,
allCases:allCasesReducer,
caseDesc:caseDescReducer,
refCases:refCaseReducer,
citationOne:CitationReducer,
allCitations:allCitationDataReducer,
ordinanceNames:ordinanceDataReducer,
allStatutes:allStatutesReducer,
statuteRead:statuteReadReducer,

caseSearch:searchCaseReducer,
indexSearch:searchIndexReducer,
citationSearch:searchCitationReducer,
courtSearch:searchCourtReducer,
advanceSearch:searchAdvanceReducer,

bookmark:setBookmarkReducer,
bookmarkList:getBookmarkReducer,
deleteBookmark:deleteBookmarkReducer,
dictionary:getDictionaryReducer,
legalterms:getLegaltermReducer,
articles:getArticlesReducer,
topics:getTopicsReducer,
topicStatute:getTopicStatuteReducer,

otp:OtpCodeReducer,
mail:mailReducer,
caseFiles:CaseFilesReducer,
caseReadIds:CaseReadIdsReducer,

allClientsCases:allClientsCasesReducer,
clientsList:allClientsReducer,
singleClient:clientReducer,
clientCreate:ClientCreateReducer,
clientUpdate:ClientUpdateReducer,
casesList:allClientCasesReducer,
singleCase:caseReducer,
caseCreate:CaseCreateReducer,
caseUpdate:CaseUpdateReducer,

})


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
  loginUser: { userInfo: userInfoFromStorage }
  }
  
  const middleware = [thunk]
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )




export default store
