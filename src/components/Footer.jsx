import { resourcesLinks } from "../constants/index";
import { platformLinks } from "../constants/index";
import { communityLinks } from "../constants/index";
const Footer = () => {
  const resourcesArray = resourcesLinks;
  const platformArray = platformLinks;
  const communityArray = communityLinks;
  return (
    <div className="border-t border-neutral-800 py-20 grid grid-cols-2 lg:grid-cols-3 ">
      <div>
        <h1 className="font-bold mb-4">Resources</h1>
        <div>
          {resourcesArray.map((item ,key) => (
            <p key={key} className="text-neutral-200 mb-3">
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold mb-4">Platform</h1>
        <div>
          {platformArray.map((item ,key) => (
            <p key={key} className="text-neutral-200 mb-3">
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold mb-4">Community
        </h1>
        <div>
          {communityArray.map((item ,key) => (
            <p key={key} className="text-neutral-200 mb-3">
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
