import Foundation

@objc public class CruzrSdk: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
