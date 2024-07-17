import { useState } from 'react';
import { TextInput, View } from 'react-native';


export default function Field() {
    const [text, setText] = useState('')

    return (
        <View>
            <TextInput
                size='large'
                placeholder='Login:'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <TextInput
                size='large'
                placeholder='Senha:'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>

    )
}