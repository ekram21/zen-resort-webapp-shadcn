

import {database} from '../firebase';
import { ref, child, get, update , push, onValue, DataSnapshot} from "firebase/database";
import { toast } from '@/components/ui/use-toast'


type NoUndefined<T> = {
    [K in keyof T]: Exclude<T[K], undefined>;
};

interface BatchedUpdatesObject {
    [address: string] : NoUndefined<Record<string, unknown>>;//make sure Object has no undefined values as firebase will not allowed undefined values
}



class CloudDatabase {

    isReadAllowed: boolean;             //this will control whether user is allowed to read from the database or not
    isChangeAllowed: boolean;           //this will control whether user is allowed to make changes to the database or not

    constructor(){
        this.isReadAllowed          = true;
        this.isChangeAllowed        = true;
    }

    async update(updates: BatchedUpdatesObject){
        if (!this.isChangeAllowed){
            toast({title: 'Updates have been blocked for this account, due to suspicious traffic'})
            return Promise.reject('Updates are blocked for this account');
        }

        // Validate that each address in updates is defined and valid
        for (const oneAddress in updates) {
            if (oneAddress === undefined || String(oneAddress).includes('/undefined')) {
                toast({
                    title: 'One of the addresses in the update object is undefined',
                });
                return Promise.reject('Invalid address in updates object');
            }
        }

        try {
            const dbRef = ref(database); // Reference to the root or specify a path if needed
            await update(dbRef, updates);
            return Promise.resolve('Update successful');
        } 
        catch (error) {
            console.error('Error updating database:', error);
            toast({ title: 'Failed to update database' });
            return Promise.reject(error);
        }
    }

    async read(address: string){
        if (!this.isReadAllowed){
            toast({title: 'Reads have been blocked for this account, due to suspicious traffic'})
            return Promise.reject('Reads have been blocked for this account, due to suspicious traffic');
        }

        if (address === undefined){
            toast({title: 'The address for read object is undefined'})
            return Promise.reject('The address for read object is undefined');
        }
        if (String(address).includes('/undefined')){
            toast({title: 'The address for read object is undefined'})
            return Promise.reject('The address for read object is undefined');
        }

        if (address === 'Hotel-Admins' || address === '/Hotel-Admins' || address === 'Hotel-Admins/' || address === '/Hotel-Admins/'){
            toast({title: 'Cannot read from root Hotel-Admins address'})
            return Promise.reject('Cannot read from root Hotel-Admins address');
        }

        const dbRef             = ref(database);
        const snapshot          = await get(child(dbRef, address));

        return snapshot.val();
    }

    async delete(deleteAddrArray: string[]){
        if (!this.isChangeAllowed){
            toast({title: 'Updates have been blocked for this account, due to suspicious traffic'})
            return Promise.reject('Updates are blocked for this account');
        }

        //do not allow delete from any addresses which are of single length example Users-People/ or if it contains undefined in the address string
        for (const oneAddress of deleteAddrArray){
            if (oneAddress === undefined || String(oneAddress).includes('/undefined')) {
                toast({
                    title: 'One of the addresses in the update object is undefined',
                });
                return Promise.reject('Invalid address in updates object');
            }

            if (oneAddress.split('/').length === 1){
                toast({
                    title: 'Cannot delete from root address',
                });
                return Promise.reject('Cannot delete from root address');
            }
        }

        try {
            const dbRef = ref(database); // Reference to the root or specify a path if needed
            await update(dbRef, deleteAddrArray.map(oneAddr=>({[oneAddr]: null})));
            return Promise.resolve('Delete successful');
        } 
        catch (error) {
            console.error('Error deleting database location:', error);
            toast({ title: 'Failed to delete database location' });
            return Promise.reject(error);
        }

    }

    getPushKey(address: string){
        return push(child(ref(database), address)).key;
    } 

    async listen(address: string, callback: (snapshot: DataSnapshot) => void){

        if (address === undefined){
            toast({title: 'The address for listen object is undefined'})
            return Promise.reject('The address for listen object is undefined');
        }
        if (String(address).includes('/undefined')){
            toast({title: 'The address for listen object is undefined'})
            return Promise.reject('The address for listen object is undefined');
        }

        if (address === 'Hotel-Admins' || address === '/Hotel-Admins' || address === 'Hotel-Admins/' || address === '/Hotel-Admins/'){
            toast({title: 'Cannot listen from root Hotel-Admins address'})
            return Promise.reject('Cannot listen from root Hotel-Admins address');
        }

        const dbRef             = ref(database);
        onValue(child(dbRef, address), callback);
    }

} 

export default new CloudDatabase()