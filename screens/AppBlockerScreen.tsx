import React, { useEffect, useState } from 'react';
import { View, Text } from 'native-base';
import GetApps from 'react-native-get-apps';

type App = {
    packageName: string;
};

const AppBlockerScreen = () => {
    const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    GetApps.getApps()
      .then((apps) => console.log(apps))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Installed Apps:</Text>
      {apps.map((app) => (
        <Text key={app.packageName}>{app.packageName}</Text>
      ))}
    </View>
  );
};

export default AppBlockerScreen;
